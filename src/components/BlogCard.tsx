import React from 'react';
import Image from 'next/image';
import { User, CalendarDays, Clock } from 'lucide-react'; // Importing icons

export interface BlogCardProps {
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  slug: string;
  variant?: 'primary' | 'secondary'; // 'primary' for featured, 'secondary' for others
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  author,
  date,
  readTime,
  category,
  imageUrl,
  variant = 'secondary', // Default to secondary
}) => {
  const isPrimary = variant === 'primary';

  // Tailwind classes for primary vs. secondary buttons
  const buttonClasses = isPrimary
    ? 'inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors duration-300 shadow-md'
    : 'inline-flex items-center justify-center px-4 py-2 border border-secondary text-sm font-medium rounded-md text-secondary bg-card hover:bg-secondary/10 transition-colors duration-300';

  return (
    <div className={`bg-card border border-border rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${isPrimary ? 'col-span-1 md:col-span-2 lg:col-span-3' : ''}`}>
      <div className={`flex ${isPrimary ? 'flex-col md:flex-row' : 'flex-col'} items-stretch`}>
        {/* Image Section */}
        <div className={`${isPrimary ? 'w-full md:w-1/2' : 'w-full'} flex-shrink-0`}>
          <div className="relative pb-[66.66%] md:pb-[56.25%] overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              {category}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className={`p-6 flex flex-col justify-between ${isPrimary ? 'w-full md:w-1/2' : 'w-full'}`}>
          <div>
            <h3 className={`font-extrabold text-card-foreground mb-2 rounded-lg ${isPrimary ? 'text-3xl' : 'text-xl'}`}>
              {title}
            </h3>
            <p className={`text-muted-foreground mb-4 rounded-lg ${isPrimary ? 'text-lg' : 'text-base'}`}>
              {description}
            </p>
          </div>

          {/* Metadata */}
          <div className={`flex flex-wrap items-center text-muted-foreground text-sm ${isPrimary ? 'mt-6' : 'mt-4'}`}>
            <div className="flex items-center mr-4 mb-2">
              <User className="h-4 w-4 mr-1" />
              <span>{author}</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <CalendarDays className="h-4 w-4 mr-1" />
              <span>{date}</span>
            </div>
            <div className="flex items-center mb-2">
              <Clock className="h-4 w-4 mr-1" />
              <span>{readTime}</span>
            </div>
          </div>

          {/* Read More Button */}
          <div className={`${isPrimary ? 'mt-8' : 'mt-6'}`}>
            <a href="#" className={buttonClasses}>
              Read More
              <svg className="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
