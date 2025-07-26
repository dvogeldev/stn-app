import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-[url('/images/404-background.png')] bg-cover text-center text-stone-800 dark:text-stone-100">
      <div className="pt-20 pb-10 px-4">
        <h1 className="text-4xl font-serif font-bold mb-4">Lost on the Path to St. Nicholas?</h1>
        <h2 className="text-xl mb-8">Fear not, weary traveler! You’ve wandered off the trail, but St. Nicholas is here to guide you back.</h2>
        <div className="mx-auto mb-8">
          {/* Placeholder image until final artwork is available */}
          <Image src="/images/404-background.png" alt="Placeholder icon" width={200} height={200} className="mx-auto" />
        </div>
        <p className="mb-6 max-w-xl mx-auto">It seems this page has slipped away like a candle’s flicker in the wind. While we search for it, explore these paths to reconnect with our community.</p>
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <Link href="/" className="bg-yellow-700 text-white px-4 py-2 rounded hover:bg-yellow-800">Return to Our Parish</Link>
          <Link href="/calendar" className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800">Discover Our Services</Link>
          <Link href="/contact" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Contact Our Clergy</Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
