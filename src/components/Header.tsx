// src/components/Header.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TopBar } from '@/components/TopBar';
import { MobileNav } from '@/components/MobileNav';
import { HeaderConfig, getHeaderConfig } from '@/lib/headerConfig';

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
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* Enhanced Logo and Branding */}
        <Link href="/" className="flex items-center space-x-3 sm:space-x-4 group">
          <div className="relative flex-shrink-0">
            <Image
              src="/assets/stn-icon-favicon.svg"
              alt="St. Nicholas Orthodox Church Logo"
              width={48}
              height={48}
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-12 md:w-12 logo-icon transition-all duration-200 group-hover:scale-105"
              priority
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-200 truncate">
              St. Nicholas Orthodox Church
            </span>
            <p className="text-sm sm:text-base font-medium text-muted-foreground leading-tight opacity-90">
              Grand Rapids, MI
            </p>
          </div>
        </Link>

        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className="relative font-semibold text-foreground hover:text-primary transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
          {/* Call-to-action buttons with enhanced styling and explicit spacing */}
          <li className="flex items-center">
            <Button 
              asChild 
              variant="secondary" 
              size="sm"
              className="mr-4 hover:shadow-lg hover:shadow-secondary/30 hover:scale-[1.02] transition-all duration-200 font-semibold transform-gpu"
            >
              <Link href="/dlive">WATCH LIVE</Link>
            </Button>
            <Button 
              asChild 
              size="sm" 
              variant="default"
              className="hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-200 font-semibold transform-gpu"
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
