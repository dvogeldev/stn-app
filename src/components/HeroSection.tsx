// src/components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import { ArrowRight, Clock, MapPin } from 'lucide-react'; // Import icons from lucide-react
import { fetchSiteSettings } from '@/lib/wordpress';

export async function HeroSection() {
  const siteSettings = await fetchSiteSettings();
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/still_image.jpg"
          alt="Interior of St. Nicholas Orthodox Church showing the beautiful iconostasis with traditional Orthodox icons, ornate wooden carvings, and a priest conducting Divine Liturgy at the altar"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Subtle gradient overlay for additional depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            {/* Custom Orthodox Cross SVG */}
            <svg
              width="64"
              height="64"
              viewBox="0 0 498 498"
              className="text-white mx-auto mb-8 drop-shadow-lg"
              fill="currentColor"
            >
              <g transform="translate(0,498) scale(0.1,-0.1)">
                <path d="M0 3865 l0 -1115 140 0 140 0 0 975 0 975 975 0 975 0 0 140 0 140
                -1115 0 -1115 0 0 -1115z"/>
                <path d="M2730 4840 l0 -140 975 0 975 0 0 -975 0 -975 150 0 150 0 0 1115 0
                1115 -1125 0 -1125 0 0 -140z"/>
                <path d="M2408 4450 c-102 -30 -181 -150 -164 -245 6 -30 4 -32 -36 -44 -58
                -18 -102 -53 -135 -108 -22 -38 -27 -59 -27 -112 1 -137 94 -231 229 -231 l55
                0 -2 -241 -3 -241 -70 -22 c-234 -74 -411 -251 -486 -486 l-23 -70 -248 0
                -248 0 6 43 c18 132 -94 257 -232 257 -105 0 -211 -87 -227 -186 l-7 -39 -57
                -1 c-130 -1 -223 -98 -223 -229 0 -134 94 -228 227 -229 54 -1 63 -4 63 -19 0
                -25 27 -77 59 -110 45 -49 98 -71 172 -72 56 0 73 4 115 30 68 43 107 108 112
                191 l4 64 243 0 242 0 17 -62 c64 -230 274 -440 504 -504 l62 -17 0 -241 0
                -241 -62 3 c-133 7 -238 -92 -238 -223 0 -69 23 -125 66 -169 32 -32 98 -65
                130 -66 19 0 22 -7 26 -65 9 -112 72 -187 178 -215 141 -37 281 73 283 222 l0
                58 36 10 c137 37 206 200 140 331 -38 77 -156 140 -229 124 l-30 -7 0 239 0
                239 73 23 c230 73 409 252 483 486 l22 70 245 3 246 2 -6 -55 c-17 -165 136
                -290 300 -244 71 19 143 102 157 179 5 30 9 35 30 32 13 -1 47 2 76 8 144 30
                224 187 163 320 -39 86 -103 129 -204 138 l-61 4 -17 49 c-30 83 -126 149
                -217 149 -124 0 -230 -105 -230 -228 l0 -52 -244 0 -244 0 -6 38 c-4 20 -30
                84 -58 141 -43 91 -62 117 -137 192 -75 75 -101 94 -192 137 -57 28 -121 54
                -141 58 l-38 6 0 248 0 248 45 -6 c62 -7 126 14 176 56 119 102 103 289 -31
                370 -30 17 -67 32 -82 32 -27 0 -28 2 -28 48 -2 163 -151 278 -302 232z m-78
                -1525 l0 -275 -275 0 c-240 0 -275 2 -275 15 0 9 14 51 30 94 63 163 188 299
                350 381 40 21 143 58 163 59 4 1 7 -123 7 -274z m382 249 c204 -73 370 -238
                442 -442 14 -40 26 -75 26 -78 0 -2 -124 -4 -275 -4 l-275 0 0 275 c0 151 2
                275 4 275 3 0 38 -12 78 -26z m-382 -1103 l0 -280 -52 16 c-129 38 -274 133
                -353 231 -54 67 -133 221 -142 275 l-6 37 277 0 276 0 0 -279z m844 252 c-24
                -102 -91 -225 -169 -310 -88 -98 -237 -188 -347 -210 l-28 -5 0 276 0 276 275
                0 275 0 -6 -27z"/>
                <path d="M0 1125 l0 -1125 1115 0 1115 0 0 150 0 150 -975 0 -975 0 0 975 0
                975 -140 0 -140 0 0 -1125z"/>
                <path d="M4680 1275 l0 -975 -975 0 -975 0 0 -150 0 -150 1125 0 1125 0 0
                1125 0 1125 -150 0 -150 0 0 -975z"/>
              </g>
            </svg>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              <span
                className="block drop-shadow-lg"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
              >
                Welcome to
              </span>
              <span
                className="block text-amber-300 drop-shadow-lg"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
              >
                St. Nicholas
              </span>
              <span
                className="block drop-shadow-lg"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
              >
                Orthodox Church
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-10 max-w-4xl mx-auto leading-relaxed drop-shadow-md"
              style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.4)' }}
            >
              {siteSettings.homepageSettings.welcomeMessage || 'Experience the beauty of ancient Orthodox worship in the heart of Grand Rapids. All are welcome to join our community.'}
            </p>
          </div>

          {/* Primary Call to Action */}
          <div className="mb-12">
            <button className="bg-[#464e6a] text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-[#464e6a]/90 transition-all transform hover:scale-105 shadow-2xl border border-white/20 backdrop-blur-sm mb-4 inline-flex items-center space-x-3">
              <span>Plan Your First Visit</span>
              <ArrowRight className="h-6 w-6" />
            </button>

            <p
              className="text-white/80 text-lg max-w-2xl mx-auto"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}
            >
              Join us this Sunday at 10:00 AM for Divine Liturgy. No experience necessary -
              come as you are and discover Orthodox Christianity.
            </p>
          </div>

          {/* Essential Information */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Clock className="h-8 w-8 text-amber-300 mx-auto mb-3 drop-shadow-lg" />
              <h3
                className="font-serif font-bold text-white text-lg mb-2"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}
              >
                Sunday Service
              </h3>
              <p
                className="text-white/90 font-semibold"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}
              >
                10:00 AM
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <MapPin className="h-8 w-8 text-amber-300 mx-auto mb-3 drop-shadow-lg" />
              <h3
                className="font-serif font-bold text-white text-lg mb-2"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}
              >
                Location
              </h3>
              <p
                className="text-white/90 font-semibold"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}
              >
                2250 E. Paris SE
              </p>
            </div>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30">
              Watch Online Service
            </button>
            <button className="bg-amber-600/80 backdrop-blur-md text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-all border border-white/30">
              Learn About Orthodoxy
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}