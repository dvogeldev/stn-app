// The next/image mock intentionally uses a plain <img> element, which triggers
// the `@next/next/no-img-element` rule. Disable it for this file.
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../Header';

// Mock Next.js components
jest.mock('next/link', () => {
  const NextLinkMock = (
    {
      children,
      href,
      className,
      ...props
    }: React.ComponentProps<'a'> & { href: string }
  ) => (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  );
  NextLinkMock.displayName = 'NextLinkMock';
  return NextLinkMock;
});

jest.mock('next/image', () => {
  const NextImageMock = (
    {
      src,
      alt,
      className,
      ...props
    }: Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {
      src: string;
      alt: string;
    }
  ) => <img src={src} alt={alt} className={className} {...props} />;
  NextImageMock.displayName = 'NextImageMock';
  return NextImageMock;
});

// Mock components
jest.mock('../TopBar', () => ({
  TopBar: ({ show, message }: { show: boolean; message?: string }) => 
    show ? <div data-testid="topbar">{message}</div> : null
}));

jest.mock('../MobileNav', () => ({
  MobileNav: ({ navLinks }: { navLinks: { href: string; label: string }[] }) => (
    <div data-testid="mobile-nav">
      {navLinks.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </div>
  )
}));

describe('Header Mobile Responsiveness', () => {
  const mockConfig = {
    showTopBar: true,
    topBarMessage: 'Welcome to St. Nicholas Orthodox Church'
  };

  beforeEach(() => {
    // Mock window.matchMedia for responsive tests
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it('renders header with proper mobile structure', () => {
    render(<Header config={mockConfig} />);
    
    // Check that header exists
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    
    // Check that logo link has minimum touch target
    const logoLink = screen.getByRole('link', { name: /st. nicholas orthodox church logo/i });
    expect(logoLink).toHaveClass('min-h-[44px]');
  });

  it('has proper touch targets for navigation links', () => {
    render(<Header config={mockConfig} />);
    
    // Check desktop navigation links have proper touch targets
    const faithLink = screen.getByRole('link', { name: 'Our Faith' });
    expect(faithLink).toHaveClass('min-h-[44px]');
    
    const churchLink = screen.getByRole('link', { name: 'Our Church' });
    expect(churchLink).toHaveClass('min-h-[44px]');
    
    const communityLink = screen.getByRole('link', { name: 'Our Community' });
    expect(communityLink).toHaveClass('min-h-[44px]');
  });

  it('has proper button sizing for touch targets', () => {
    render(<Header config={mockConfig} />);
    
    // Check that buttons have minimum touch target height
    const watchLiveButton = screen.getByRole('link', { name: 'WATCH LIVE' });
    expect(watchLiveButton).toHaveClass('min-h-[44px]');
    
    const newHereButton = screen.getByRole('link', { name: 'NEW HERE?' });
    expect(newHereButton).toHaveClass('min-h-[44px]');
  });

  it('includes mobile navigation component', () => {
    render(<Header config={mockConfig} />);
    
    // Check that mobile navigation is present
    const mobileNav = screen.getByTestId('mobile-nav');
    expect(mobileNav).toBeInTheDocument();
  });

  it('has responsive font scaling classes', () => {
    render(<Header config={mockConfig} />);
    
    // Check church name has responsive text sizing
    const churchName = screen.getByText('St. Nicholas Orthodox Church');
    expect(churchName).toHaveClass('text-lg', 'sm:text-xl', 'md:text-2xl', 'lg:text-3xl');
    
    // Check location text has responsive sizing
    const location = screen.getByText('Grand Rapids, MI');
    expect(location).toHaveClass('text-xs', 'sm:text-sm', 'md:text-base');
  });

  it('has proper spacing for mobile devices', () => {
    render(<Header config={mockConfig} />);
    
    // Check navigation container has responsive padding
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('px-4', 'sm:px-6', 'py-4', 'sm:py-6');
  });
});
