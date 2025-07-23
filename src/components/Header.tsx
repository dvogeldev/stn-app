// src/components/Header.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { TopBar } from '@/components/TopBar';

export function Header() {
  const navLinks = [
    { href: '/faith', label: 'Our Faith' },
    { href: '/community', label: 'Our Community' },
    { href: '/church', label: 'Our Church' },
    { href: '/calendar', label: 'Calendar' },
  ];
  return (
  <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50 dark:bg-stone-900 dark:border-stone-700">
    <TopBar />
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo or Site Title */}
          <Link href="/" className="flex items-center space-x-2 text-xl text-serif font-semibold text-neutral-900 dark:text-neutral-100">
            {/* Wrap the Image and the div in a single parent element */}
            <> {/* This Fragment wraps the two direct children */}
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
            </>
          </Link>

          <ul className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-neutral-700 hover:text-primary-700 transition-colors">
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

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle mobile menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="flex flex-col gap-4 py-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium hover:text-gray-900"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild>
                    <Link href="/dlive">Watch Live</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/new-visitors">New Here?</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/donate">Donate</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
  );
}
