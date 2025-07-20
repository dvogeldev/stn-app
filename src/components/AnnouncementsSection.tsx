import React from 'react';
import { BlogCard } from './BlogCard'; // Import the BlogCard component

export const AnnouncementsSection = () => {
  // Sample data for blog cards
  const featuredAnnouncement = {
    title: 'Understanding the Divine Liturgy',
    description: 'Discover the profound meaning behind each element of our ancient worship service and how it connects us to centuries of Christian tradition.',
    author: 'Fr. Michael Thompson',
    date: 'December 15, 2024',
    readTime: '5 min read',
    category: 'Worship',
    imageUrl: '/images/parish-family.jpg',
  };

  const latestAnnouncements = [
    {
      title: 'Preparing for Great Lent',
      description: 'Learn about the spiritual disciplines and practices that help Orthodox Christians prepare their hearts for the holiest season of the year.',
      author: 'Deacon Sarah Williams',
      date: 'December 12, 2024',
      readTime: '4 min read',
      category: 'Spiritual Life',
      imageUrl: '/images/christ_icon.webp',
    },
    {
      title: 'Icons: Windows to Heaven',
      description: 'Explore the rich theology and artistic tradition behind Orthodox iconography and their role in our prayer and worship life.',
      author: 'Maria Konstantinos',
      date: 'December 10, 2024',
      readTime: '6 min read',
      category: 'Theology',
      imageUrl: '/images/orthodox_tradition.webp',
    },
    {
      title: 'Volunteer Opportunities for Pascha',
      description: 'Sign up to help with various ministries and events as we prepare for the joyous celebration of Holy Pascha!',
      author: 'Parish Council',
      date: 'December 8, 2024',
      readTime: '3 min read',
      category: 'Community',
      imageUrl: '/images/parish_family_cropped.webp',
    },
    // Add more announcements as needed
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title and Description */}
        <h2 className="text-4xl font-extrabold text-foreground mb-4 rounded-lg">
          Latest Announcements
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto mb-12 rounded-lg">
          Explore insights on Orthodox faith, worship, and community life from our clergy and parish members.
        </p>

        {/* Featured Announcement Card */}
        <div className="mb-12">
          <BlogCard {...featuredAnnouncement} variant="primary" />
        </div>

        {/* Other Latest Announcements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestAnnouncements.map((announcement, index) => (
            <BlogCard key={index} {...announcement} variant="secondary" />
          ))}
        </div>

        {/* Optional: View All Announcements Button */}
        <div className="mt-12">
          <a
            href="/announcements" // Link to a page with all announcements
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 md:py-4 md:px-10 text-lg transition-colors duration-300 shadow-md"
          >
            View All Announcements
            <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

