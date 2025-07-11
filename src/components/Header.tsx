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
    { href: '/contact', label: 'Contact' },
  ];
  return (
    <div> {/* Keep this div as discussed, not a fragment */}
      <TopBar />
      <header className="border-b bg-white">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo or Site Title */}
          <Link href="/" className="flex items-center space-x-2 text-xl text-serif font-semibold text-gray-900">
            {/* Replace the placeholder with Next.js Image component */}
            <Image
              src="/stn-icon-favicon.svg" // Path relative to the `public` folder
              alt="St. Nicholas Orthodox Church Logo"
              width={32} // Set appropriate width for your logo
              height={32} // Set appropriate height for your logo
              className="h-8 w-8" // Tailwind classes for visual sizing if needed
            />
            <span>St. Nicholas Orthodox Church</span>
          </Link>

          <ul className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
                <Button asChild size="sm">
                    <Link href="/dlive">Watch Live</Link>
                </Button>
            </li>
            <li>
                <Button asChild size="sm">
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
                      <Link href="/donate">Donate</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </div> // CHANGE THIS FRAGMENT TO A DIV
  );
}