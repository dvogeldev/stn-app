// src/components/Header.tsx
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
  ];
  return (
    <div>
      <TopBar />
      <header className="border-b bg-white">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo or Site Title */}
          <Link href="/" className="flex items-center space-x-2 text-xl text-serif font-semibold text-gray-900">
            {/* Wrap the Image and the div in a single parent element */}
            <> {/* This Fragment wraps the two direct children */}
              <Image
                src="/stn-icon-favicon.svg"
                alt="St. Nicholas Orthodox Church Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <div>
                <span>St. Nicholas Orthodox Church</span>
                <p className="text-sm font-normal text-gray-600">Grand Rapids, MI</p>
              </div>
            </>
          </Link>

          <ul className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
                <Button asChild size="sm" className="bg-orange-100 text-orange-800 hover:bg-orange-200 rounded-md">
                    <Link href="/dlive">Watch Live</Link>
                </Button>
            </li>
            <li>
                <Button asChild size="sm" className="bg-teal-700 text-white hover:bg-teal-800 rounded-md">
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
    </div>
  );
}
