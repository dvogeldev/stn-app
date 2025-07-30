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
      ...props
    }: React.ComponentProps<'a'> & { href: string }
  ) => (
    <a href={href} {...props}>
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
      width,
      height,
      className,
      ...props
    }: Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {
      src: string;
      alt: string;
    }
  ) => (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...props}
    />
  );
  NextImageMock.displayName = 'NextImageMock';
  return NextImageMock;
});

// Mock the header config
jest.mock('@/lib/headerConfig', () => ({
  getHeaderConfig: jest.fn(() => ({
    showTopBar: false,
    topBarMessage: '',
  })),
}));

describe('Header Logo and Branding', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the church logo with proper sizing', () => {
    render(<Header />);
    
    const logo = screen.getByAltText('St. Nicholas Orthodox Church Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('width', '40');
    expect(logo).toHaveAttribute('height', '40');
    expect(logo).toHaveClass('h-8', 'w-8', 'sm:h-10', 'sm:w-10', 'logo-icon');
  });

  it('renders the church name with proper hierarchy', () => {
    render(<Header />);
    
    const churchName = screen.getByText('St. Nicholas Orthodox Church');
    expect(churchName).toBeInTheDocument();
    expect(churchName).toHaveClass('font-bold', 'text-foreground');
    
    // Check responsive text sizing
    expect(churchName).toHaveClass('text-lg', 'sm:text-xl', 'md:text-2xl');
  });

  it('renders the location text with proper styling', () => {
    render(<Header />);
    
    const location = screen.getByText('Grand Rapids, MI');
    expect(location).toBeInTheDocument();
    expect(location).toHaveClass('text-muted-foreground', 'font-medium');
    
    // Check responsive text sizing
    expect(location).toHaveClass('text-xs', 'sm:text-sm');
  });

  it('applies proper spacing between logo and text', () => {
    render(<Header />);
    
    const logoContainer = screen.getByAltText('St. Nicholas Orthodox Church Logo').closest('a');
    expect(logoContainer).toHaveClass('space-x-2', 'sm:space-x-3');
  });

  it('includes hover effects for branding elements', () => {
    render(<Header />);
    
    const logoContainer = screen.getByAltText('St. Nicholas Orthodox Church Logo').closest('a');
    expect(logoContainer).toHaveClass('group');
    
    const logo = screen.getByAltText('St. Nicholas Orthodox Church Logo');
    expect(logo).toHaveClass('group-hover:scale-105');
    
    const churchName = screen.getByText('St. Nicholas Orthodox Church');
    expect(churchName).toHaveClass('group-hover:text-primary');
  });

  it('ensures logo has proper contrast classes', () => {
    render(<Header />);
    
    const logo = screen.getByAltText('St. Nicholas Orthodox Church Logo');
    expect(logo).toHaveClass('logo-icon');
  });

  it('includes proper transitions for smooth interactions', () => {
    render(<Header />);
    
    const logo = screen.getByAltText('St. Nicholas Orthodox Church Logo');
    expect(logo).toHaveClass('transition-transform', 'duration-200');
    
    const churchName = screen.getByText('St. Nicholas Orthodox Church');
    expect(churchName).toHaveClass('transition-colors', 'duration-200');
  });

  it('handles text truncation for responsive design', () => {
    render(<Header />);
    
    const churchName = screen.getByText('St. Nicholas Orthodox Church');
    expect(churchName).toHaveClass('truncate');
  });

  it('ensures logo container is flex-shrink-0 to prevent compression', () => {
    render(<Header />);
    
    const logoWrapper = screen.getByAltText('St. Nicholas Orthodox Church Logo').closest('div');
    expect(logoWrapper).toHaveClass('flex-shrink-0');
  });

  it('ensures text container has min-width-0 for proper truncation', () => {
    render(<Header />);
    
    const textContainer = screen.getByText('St. Nicholas Orthodox Church').closest('div');
    expect(textContainer).toHaveClass('min-w-0');
  });
});
