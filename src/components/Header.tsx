// src/components/Header.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TopBar } from '@/components/TopBar';
import { MobileNav } from '@/components/MobileNav';

export function Header() {
  const navLinks = [
    { href: '/our-faith', label: 'Our Faith' },
    { href: '/our-community', label: 'Our Community' },
    { href: '/our-church', label: 'Our Church' },
    { href: '/calendar', label: 'Calendar' },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50 dark:bg-stone-900 dark:border-stone-700">
      <TopBar />
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo or Site Title */}
        <Link href="/" className="flex items-center space-x-2 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
          <Image
            src="/assets/stn-icon-favicon.svg"
            alt="St. Nicholas Orthodox Church Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <div>
            <span>St. Nicholas Orthodox Church</span>
            <p className="text-sm font-normal text-neutral-600 dark:text-neutral-300">Grand Rapids, MI</p>
          </div>
        </Link>

        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-neutral-700 dark:text-white hover:text-teal-600 dark:hover:text-yellow-500 transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Button asChild variant="secondary" size="sm">
              <Link href="/dlive">Watch Live</Link>
            </Button>
          </li>
          <li>
            <Button asChild size="sm" variant="default">
              <Link href="/new-visitors">New Here?</Link>
            </Button>
          </li>
        </ul>

        <MobileNav navLinks={navLinks} />
      </nav>
    </header>
  );
}
