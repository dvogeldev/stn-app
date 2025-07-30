// src/components/Header.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TopBar } from '@/components/TopBar';
import { MobileNav } from '@/components/MobileNav';
import { HeaderConfig, getHeaderConfig } from '@/lib/headerConfig';
import { Logo } from '@/components/Logo';

interface HeaderProps {
  config?: HeaderConfig;
}

export function Header({ 
  config = getHeaderConfig('default')
}: HeaderProps) {
  const navLinks = [
    { href: '/our-faith', label: 'Our Faith' },
    { href: '/our-church', label: 'Our Church' },
    { href: '/our-community', label: 'Our Community' },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50 dark:bg-stone-900 dark:border-stone-700">
      <TopBar 
        show={config.showTopBar} 
        message={config.topBarMessage} 
      />
      <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
        {/* Enhanced Logo and Branding with improved mobile touch targets */}
        <Link href="/" className="flex items-center space-x-3 sm:space-x-4 group min-h-[44px] py-1">
          <div className="relative flex-shrink-0">
            <Logo className="h-10 w-10 sm:h-12 md:h-12 md:w-12" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-200 truncate">
              St. Nicholas Orthodox Church
            </span>
            <p className="text-xs sm:text-sm md:text-base font-medium text-muted-foreground leading-tight opacity-90">
              Grand Rapids, MI
            </p>
          </div>
        </Link>

        <ul className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className="relative min-h-[44px] flex items-center px-2 py-2 font-semibold text-foreground hover:text-primary transition-colors duration-200 after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-[calc(100%-1rem)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
          {/* Call-to-action buttons with enhanced styling and explicit spacing */}
          <li className="flex items-center gap-3 lg:gap-4">
            <Button 
              asChild 
              variant="secondary" 
              size="default"
              className="min-h-[44px] hover:shadow-lg hover:shadow-secondary/30 hover:scale-[1.02] transition-all duration-200 font-semibold transform-gpu"
            >
              <Link href="/dlive">WATCH LIVE</Link>
            </Button>
            <Button 
              asChild 
              size="default" 
              variant="default"
              className="min-h-[44px] hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-200 font-semibold transform-gpu"
            >
              <Link href="/new-visitors">NEW HERE?</Link>
            </Button>
          </li>
        </ul>

        <MobileNav navLinks={navLinks} />
      </nav>
    </header>
  );
}
