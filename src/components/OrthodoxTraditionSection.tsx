import React from 'react';
import Image from 'next/image';

// This component displays information about the Orthodox Tradition
// with a descriptive text section, an accompanying image, and three historical cards.
export const OrthodoxTraditionSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content Section - Left column on larger screens */}
        <div className="text-center md:text-left order-2 md:order-1">
          <h2 className="text-4xl font-extrabold text-foreground mb-6 rounded-lg">
            The Orthodox Tradition
          </h2>
          <p className="mt-4 text-lg text-muted-foreground mb-4 rounded-lg">
            From the golden age of Byzantium to the present day, Orthodox Christianity
            preserves the <span className="font-semibold text-primary">unbroken chain of apostolic tradition</span>.
            Like the sacred icons that adorn our churches, our faith bears witness to
            the eternal truths revealed by Christ and His apostles.
          </p>
          <p className="mt-4 text-lg text-muted-foreground mb-4 rounded-lg">
            In the hallowed halls of ancient Constantinople, the great Church Fathers
            — <span className="font-semibold text-foreground">John Chrysostom, Basil the Great, Gregory of Nazianzus</span> —
            illuminated the mysteries of faith with their profound theological writings.
            Their wisdom, captured in manuscripts of gold and crimson, continues to
            guide our understanding today.
          </p>
          <p className="mt-4 text-lg text-muted-foreground mb-8 rounded-lg">
            Our liturgical worship echoes through the centuries, unchanged in its
            essence since the early Christian communities gathered in the catacombs of Rome.
            The same prayers, the same reverence, the same <span className="italic text-secondary">living tradition</span>
            that sustained martyrs and saints now sustains us in our modern pilgrimage.
          </p>
          <blockquote 
            className="text-lg text-foreground italic border-l-4 border-primary pl-4 py-2 mt-6 rounded-lg bg-card/50"
            style={{ 
              fontFamily: 'var(--font-uncial-antiqua), serif !important',
              fontWeight: '400'
            }}
          >
            &ldquo;We have not changed the everlasting boundaries which our fathers have set, but we keep the tradition as we have received it.&rdquo;
            <footer 
              className="mt-2 text-base text-muted-foreground font-bold italic"
              style={{ 
                fontFamily: 'var(--font-poppins), sans-serif !important',
                fontWeight: '700'
              }}
            >
              — St. John of Damascus
            </footer>
          </blockquote>
        </div>

        {/* Image Section - Right column on larger screens */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="bg-card border border-border rounded-xl shadow-lg p-4 max-w-sm w-full">
            <Image
              src="/images/christ_icon.webp" // Path to your uploaded image in the public directory
              alt="Christ with the Church Fathers - Byzantine tradition"
              width={400}
              height={300}
              className="rounded-lg object-cover mb-4"
              sizes="(max-width: 640px) 100vw, 400px"
            />
            <p className="text-sm text-muted-foreground text-center">
              <span className="font-semibold text-card-foreground">Christ with the Church Fathers</span>
              <br />
              Byzantine tradition, preserving the apostolic faith
            </p>
          </div>
        </div>
      </div>

      {/* New Section for the 3 Cards */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1: 33 AD - Pentecost */}
        <div className="flex flex-col items-center p-8 bg-card border border-border rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
          <span className="text-4xl font-bold text-accent mb-2 rounded-lg">33 AD</span>
          <h3 className="text-xl font-semibold text-card-foreground mb-2 rounded-lg">Pentecost</h3>
          <p className="text-muted-foreground rounded-lg">Birth of the Church</p>
        </div>

        {/* Card 2: 325 AD - Council of Nicaea */}
        <div className="flex flex-col items-center p-8 bg-card border border-border rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
          <span className="text-4xl font-bold text-primary mb-2 rounded-lg">325 AD</span>
          <h3 className="text-xl font-semibold text-card-foreground mb-2 rounded-lg">Council of Nicaea</h3>
          <p className="text-muted-foreground rounded-lg">Defining Orthodox Faith</p>
        </div>

        {/* Card 3: Today - Living Tradition */}
        <div className="flex flex-col items-center p-8 bg-card border border-border rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
          <span className="text-4xl font-bold text-secondary mb-2 rounded-lg">Today</span>
          <h3 className="text-xl font-semibold text-card-foreground mb-2 rounded-lg">Living Tradition</h3>
          <p className="text-muted-foreground rounded-lg">Unchanged & Unchanging</p>
        </div>
      </div>
    </section>
  );
};

