import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="fixed inset-0 flex items-center justify-center text-center text-stone-800 dark:text-stone-100 overflow-hidden dark-background hide-header bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/404-background.png"
          alt="St. Nicholas Orthodox Church interior background"
          fill
          className="object-cover object-bottom w-full h-full"
          sizes="100vw"
          priority
          style={{
            objectFit: 'cover',
            objectPosition: 'bottom'
          }}
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 px-4 py-8 max-w-4xl mx-auto" role="main" aria-labelledby="error-title">
        <div
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-primary drop-shadow-lg"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          aria-label="Error code 404"
        >
          404
        </div>
        <h1
          id="error-title"
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-primary drop-shadow-lg leading-tight"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
        >
          Lost on the Path to St. Nicholas?
        </h1>
        <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}>
          Fear not, weary traveler! You&apos;ve wandered off the trail, but St. Nicholas is here to guide you back.
        </p>

        <div className="mx-auto mb-8">
          {/* Complete Church Logo - Icon + Text */}
          <div className="flex flex-col items-center space-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              strokeWidth="1"
              viewBox="0 0 498 498"
              className="mx-auto drop-shadow-lg logo-icon"
              style={{
                filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))'
              }}
              role="img"
              aria-label="St. Nicholas Orthodox Church logo"
            >
              <path d="M0 111.5V223h28V28h195V0H0v111.5zM273 14v14h195v195h30V0H273v14zm-32.2 39c-10.2 3-18.1 15-16.4 24.5.6 3 .4 3.2-3.6 4.4-5.8 1.8-10.2 5.3-13.5 10.8-2.2 3.8-2.7 5.9-2.7 11.2.1 13.7 9.4 23.1 22.9 23.1h5.5l-.2 24.1-.3 24.1-7 2.2c-23.4 7.4-41.1 25.1-48.6 48.6l-2.3 7H125l.6-4.3c1.8-13.2-9.4-25.7-23.2-25.7-10.5 0-21.1 8.7-22.7 18.6l-.7 3.9-5.7.1c-13 .1-22.3 9.8-22.3 22.9 0 13.4 9.4 22.8 22.7 22.9 5.4.1 6.3.4 6.3 1.9 0 2.5 2.7 7.7 5.9 11 4.5 4.9 9.8 7.1 17.2 7.2 5.6 0 7.3-.4 11.5-3 6.8-4.3 10.7-10.8 11.2-19.1l.4-6.4h48.5l1.7 6.2c6.4 23 27.4 44 50.4 50.4l6.2 1.7v48.2l-6.2-.3c-13.3-.7-23.8 9.2-23.8 22.3 0 6.9 2.3 12.5 6.6 16.9 3.2 3.2 9.8 6.5 13 6.6 1.9 0 2.2.7 2.6 6.5.9 11.2 7.2 18.7 17.8 21.5 14.1 3.7 28.1-7.3 28.3-22.2V415l3.6-1c13.7-3.7 20.6-20 14-33.1-3.8-7.7-15.6-14-22.9-12.4l-3 .7v-47.8l7.3-2.3c23-7.3 40.9-25.2 48.3-48.6l2.2-7 24.5-.3 24.6-.2-.6 5.5c-1.7 16.5 13.6 29 30 24.4 7.1-1.9 14.3-10.2 15.7-17.9.5-3 .9-3.5 3-3.2 1.3.1 4.7-.2 7.6-.8 14.4-3 22.4-18.7 16.3-32-3.9-8.6-10.3-12.9-20.4-13.8l-6.1-.4-1.7-4.9c-3-8.3-12.6-14.9-21.7-14.9-12.4 0-23 10.5-23 22.8v5.2h-48.8l-.6-3.8c-.4-2-3-8.4-5.8-14.1-4.3-9.1-6.2-11.7-13.7-19.2-7.5-7.5-10.1-9.4-19.2-13.7-5.7-2.8-12.1-5.4-14.1-5.8l-3.8-.6v-49.6l4.5.6c6.2.7 12.6-1.4 17.6-5.6 11.9-10.2 10.3-28.9-3.1-37-3-1.7-6.7-3.2-8.2-3.2-2.7 0-2.8-.2-2.8-4.8-.2-16.3-15.1-27.8-30.2-23.2zM233 205.5V233h-27.5c-24 0-27.5-.2-27.5-1.5 0-.9 1.4-5.1 3-9.4 6.3-16.3 18.8-29.9 35-38.1 4-2.1 14.3-5.8 16.3-5.9.4-.1.7 12.3.7 27.4zm38.2-24.9c20.4 7.3 37 23.8 44.2 44.2 1.4 4 2.6 7.5 2.6 7.8 0 .2-12.4.4-27.5.4H263v-27.5c0-15.1.2-27.5.4-27.5.3 0 3.8 1.2 7.8 2.6zM233 290.9v28l-5.2-1.6c-12.9-3.8-27.4-13.3-35.3-23.1-5.4-6.7-13.3-22.1-14.2-27.5l-.6-3.7H233v27.9zm84.4-25.2c-2.4 10.2-9.1 22.5-16.9 31-8.8 9.8-23.7 18.8-34.7 21l-2.8.5V263h55l-.6 2.7zM0 385.5V498h223v-30H28V273H0v112.5zm468-15V468H273v30h225V273h-30v97.5z" />
            </svg>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                St. Nicholas Orthodox Church
              </h2>
              <p className="text-lg text-white/90 font-medium drop-shadow-md" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}>
                Grand Rapids, MI
              </p>
            </div>
          </div>
        </div>

        <p className="mb-6 max-w-xl mx-auto text-white text-xl md:text-2xl leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}>
          It seems this page has slipped away like a candle&apos;s flicker in the wind. While we search for it, explore these paths to reconnect with our community.
        </p>

        <nav className="flex justify-center gap-4 mb-12 flex-wrap" role="navigation" aria-label="Error page navigation">
          <Link
            href="/"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Return to homepage"
          >
            Return to Our Parish
          </Link>
          <Link
            href="/calendar"
            className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-all focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            aria-label="View church calendar and services"
          >
            Discover Our Services
          </Link>
          <Link
            href="/our-church/visit-us"
            className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            aria-label="Contact church clergy and staff"
          >
            Contact Our Clergy
          </Link>
        </nav>
      </div>

      {/* Copyright footer overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-10 py-4">
        <p className="text-center text-white/70 text-sm" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
          © 2025 St. Nicholas Orthodox Church. All rights reserved.
        </p>
      </div>

    </main>
  );
}