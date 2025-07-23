/**
 * Responsive Design Tests for Calendar Page with Header and Footer
 * Tests Requirements: 3.3, 3.1
 */

import React from 'react';
import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import CalendarClient from '../CalendarClient';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Mock Next.js components
vi.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
  MockLink.displayName = 'MockLink';
  return { default: MockLink };
});

vi.mock('next/image', () => {
  const MockImage = ({
    src,
    alt,
    width,
    height,
    className
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} width={width} height={height} className={className} />
  );
  MockImage.displayName = 'MockImage';
  return { default: MockImage };
});

// Mock sample calendar events
const mockEvents = [
  {
    id: '1',
    title: 'Divine Liturgy',
    start: new Date('2024-01-07T10:00:00'),
    end: new Date('2024-01-07T12:00:00'),
    description: 'Sunday Divine Liturgy',
    location: 'Main Church'
  },
  {
    id: '2',
    title: 'Bible Study',
    start: new Date('2024-01-10T19:00:00'),
    end: new Date('2024-01-10T20:30:00'),
    description: 'Weekly Bible Study',
    location: 'Parish Hall'
  }
];

// Helper function to simulate different viewport sizes
const setViewport = (width: number, height: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: height,
  });
  window.dispatchEvent(new Event('resize'));
};

describe('Calendar Page Responsive Design', () => {
  beforeEach(() => {
    // Reset viewport to desktop size
    setViewport(1024, 768);
  });

  describe('Header Component Responsive Behavior', () => {
    test('displays full navigation on desktop screens', () => {
      setViewport(1024, 768);
      render(<Header />);
      
      // Desktop navigation should be visible
      expect(screen.getByText('Our Faith')).toBeVisible();
      expect(screen.getByText('Our Community')).toBeVisible();
      expect(screen.getByText('Our Church')).toBeVisible();
      expect(screen.getByText('Calendar')).toBeVisible();
      expect(screen.getByText('Watch Live')).toBeVisible();
      expect(screen.getByText('New Here?')).toBeVisible();
    });

    test('shows mobile menu button on mobile screens', () => {
      setViewport(375, 667); // iPhone SE size
      render(<Header />);
      
      // Mobile menu button should be visible
      const menuButton = screen.getByRole('button', { name: /toggle mobile menu/i });
      expect(menuButton).toBeVisible();
      
      // Desktop navigation should be hidden
      const desktopNav = screen.queryByText('Our Faith');
      expect(desktopNav).not.toBeVisible();
    });

    test('mobile menu opens and displays navigation links', async () => {
      setViewport(375, 667);
      render(<Header />);
      
      const menuButton = screen.getByRole('button', { name: /toggle mobile menu/i });
      fireEvent.click(menuButton);
      
      // Wait for mobile menu to open
      await waitFor(() => {
        expect(screen.getByText('Our Faith')).toBeVisible();
        expect(screen.getByText('Our Community')).toBeVisible();
        expect(screen.getByText('Our Church')).toBeVisible();
        expect(screen.getByText('Calendar')).toBeVisible();
      });
    });

    test('logo and church name remain visible on all screen sizes', () => {
      // Test desktop
      setViewport(1024, 768);
      const { rerender } = render(<Header />);
      expect(screen.getByText('St. Nicholas Orthodox Church')).toBeVisible();
      expect(screen.getByText('Grand Rapids, MI')).toBeVisible();
      
      // Test tablet
      setViewport(768, 1024);
      rerender(<Header />);
      expect(screen.getByText('St. Nicholas Orthodox Church')).toBeVisible();
      
      // Test mobile
      setViewport(375, 667);
      rerender(<Header />);
      expect(screen.getByText('St. Nicholas Orthodox Church')).toBeVisible();
    });
  });

  describe('Footer Component Responsive Behavior', () => {
    test('displays multi-column layout on desktop', () => {
      setViewport(1024, 768);
      render(<Footer />);
      
      expect(screen.getByText('St. Nicholas Orthodox Church')).toBeVisible();
      expect(screen.getByText('Quick Links')).toBeVisible();
      expect(screen.getByText('Resources')).toBeVisible();
      expect(screen.getByText('Orthodox Calendar')).toBeVisible();
    });

    test('stacks columns vertically on mobile', () => {
      setViewport(375, 667);
      render(<Footer />);
      
      // All sections should still be visible but stacked
      expect(screen.getByText('St. Nicholas Orthodox Church')).toBeVisible();
      expect(screen.getByText('Quick Links')).toBeVisible();
      expect(screen.getByText('Resources')).toBeVisible();
    });

    test('footer links remain clickable on all screen sizes', () => {
      const sizes = [
        [1024, 768], // Desktop
        [768, 1024], // Tablet
        [375, 667]   // Mobile
      ];

      sizes.forEach(([width, height]) => {
        setViewport(width, height);
        const { rerender } = render(<Footer />);
        
        const homeLink = screen.getByRole('link', { name: 'Home' });
        const calendarLink = screen.getByRole('link', { name: 'Orthodox Calendar' });
        
        expect(homeLink).toBeVisible();
        expect(calendarLink).toBeVisible();
        
        rerender(<div />); // Clean up for next iteration
      });
    });
  });

  describe('Calendar Component Responsive Behavior', () => {
    test('calendar grid adapts to mobile screens', () => {
      setViewport(375, 667);
      render(<CalendarClient events={mockEvents} />);
      
      // Month navigation should show abbreviated text on mobile
      expect(screen.getByText('Prev')).toBeVisible();
      expect(screen.getByText('Next')).toBeVisible();
      
      // Day headers should show abbreviated names on mobile
      expect(screen.getByText('Sun')).toBeVisible();
      expect(screen.getByText('Mon')).toBeVisible();
      expect(screen.getByText('Tue')).toBeVisible();
    });

    test('calendar grid shows full text on desktop', () => {
      setViewport(1024, 768);
      render(<CalendarClient events={mockEvents} />);
      
      // Month navigation should show full text on desktop
      expect(screen.getByText('Previous Month')).toBeVisible();
      expect(screen.getByText('Next Month')).toBeVisible();
      
      // Day headers should show full names on desktop
      expect(screen.getByText('Sunday')).toBeVisible();
      expect(screen.getByText('Monday')).toBeVisible();
      expect(screen.getByText('Tuesday')).toBeVisible();
    });

    test('event cards stack properly on mobile', () => {
      setViewport(375, 667);
      render(<CalendarClient events={mockEvents} />);
      
      // Events should be visible and properly formatted
      expect(screen.getByText('Divine Liturgy')).toBeVisible();
      expect(screen.getByText('Bible Study')).toBeVisible();
    });

    test('modal displays correctly on mobile screens', async () => {
      setViewport(375, 667);
      render(<CalendarClient events={mockEvents} />);
      
      // Click on an event to open modal
      const eventElement = screen.getByText('Divine Liturgy');
      fireEvent.click(eventElement);
      
      // Modal should open and be properly sized for mobile
      await waitFor(() => {
        expect(screen.getByText('Event Details')).toBeVisible();
        expect(screen.getByText('Sunday Divine Liturgy')).toBeVisible();
      });
      
      // Close button should be accessible
      const closeButton = screen.getByRole('button', { name: /close/i });
      expect(closeButton).toBeVisible();
    });

    test('modal z-index is higher than header and footer', async () => {
      render(
        <div>
          <Header />
          <CalendarClient events={mockEvents} />
          <Footer />
        </div>
      );
      
      // Click on an event to open modal
      const eventElement = screen.getByText('Divine Liturgy');
      fireEvent.click(eventElement);
      
      await waitFor(() => {
        const modal = screen.getByText('Event Details').closest('.fixed');
        expect(modal).toHaveClass('z-[60]');
      });
    });
  });

  describe('Cross-Screen Size Navigation', () => {
    test('navigation remains functional when switching between screen sizes', async () => {
      const { rerender } = render(<Header />);
      
      // Start on desktop - click navigation link
      setViewport(1024, 768);
      rerender(<Header />);
      const desktopCalendarLink = screen.getByText('Calendar');
      expect(desktopCalendarLink).toBeVisible();
      
      // Switch to mobile - open menu and click navigation link
      setViewport(375, 667);
      rerender(<Header />);
      
      const menuButton = screen.getByRole('button', { name: /toggle mobile menu/i });
      fireEvent.click(menuButton);
      
      await waitFor(() => {
        const mobileCalendarLink = screen.getByText('Calendar');
        expect(mobileCalendarLink).toBeVisible();
      });
    });
  });

  describe('Layout Integration', () => {
    test('header, calendar, and footer maintain proper spacing on all screen sizes', () => {
      const sizes = [
        [1024, 768], // Desktop
        [768, 1024], // Tablet
        [375, 667]   // Mobile
      ];

      sizes.forEach(([width, height]) => {
        setViewport(width, height);
        
        render(
          <div className="bg-stone-50">
            <Header />
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
              <div className="container mx-auto px-4">
                <h1>Parish Calendar</h1>
              </div>
            </div>
            <CalendarClient events={mockEvents} />
            <Footer />
          </div>
        );
        
        // Verify all components are present
        expect(screen.getByText('St. Nicholas Orthodox Church')).toBeVisible();
        expect(screen.getByText('Parish Calendar')).toBeVisible();
        expect(screen.getByText('Divine Liturgy')).toBeVisible();
        expect(screen.getByText('Quick Links')).toBeVisible();
      });
    });
  });
});