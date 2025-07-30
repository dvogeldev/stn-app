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
          <Button 
            variant="ghost" 
            size="icon"
            className="min-h-[44px] min-w-[44px] p-2"
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle mobile menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[280px] sm:w-[320px]">
          <nav className="flex flex-col gap-2 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="min-h-[44px] flex items-center px-4 py-3 text-base sm:text-lg font-semibold text-foreground hover:text-primary hover:bg-accent/10 rounded-md transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-6 px-4">
              <Button 
                asChild 
                variant="secondary" 
                size="lg"
                className="min-h-[44px] font-semibold text-base"
              >
                <Link href="/dlive">WATCH LIVE</Link>
              </Button>
              <Button 
                asChild 
                size="lg"
                className="min-h-[44px] font-semibold text-base"
              >
                <Link href="/new-visitors">NEW HERE?</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="min-h-[44px] font-semibold text-base"
              >
                <Link href="/donate">DONATE</Link>
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}