// src/components/MobileNav.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  navLinks: NavLink[];
}

export function MobileNav({ navLinks }: MobileNavProps) {
  return (
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
                className="text-lg font-medium text-neutral-700 dark:text-white hover:text-teal-600 dark:hover:text-yellow-500 transition-colors"
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
  );
}