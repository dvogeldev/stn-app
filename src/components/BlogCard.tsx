import React from 'react';
import { User, CalendarDays, Clock } from 'lucide-react'; // Importing icons

interface BlogCardProps {
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
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
    ? 'inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-md'
    : 'inline-flex items-center justify-center px-4 py-2 border border-blue-600 text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-300';

  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${isPrimary ? 'col-span-1 md:col-span-2 lg:col-span-3' : ''}`}>
      <div className={`flex ${isPrimary ? 'flex-col md:flex-row' : 'flex-col'} items-stretch`}>
        {/* Image Section */}
        <div className={`${isPrimary ? 'w-full md:w-1/2' : 'w-full'} flex-shrink-0`}>
          <div className="relative pb-[66.66%] md:pb-[56.25%] overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
            <img
              src={imageUrl}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
              onError={(e) => { e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Not+Found"; }}
            />
            <span className="absolute top-4 left-4 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              {category}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className={`p-6 flex flex-col justify-between ${isPrimary ? 'w-full md:w-1/2' : 'w-full'}`}>
          <div>
            <h3 className={`font-extrabold text-gray-900 mb-2 rounded-lg ${isPrimary ? 'text-3xl' : 'text-xl'}`}>
              {title}
            </h3>
            <p className={`text-gray-600 mb-4 rounded-lg ${isPrimary ? 'text-lg' : 'text-base'}`}>
              {description}
            </p>
          </div>

          {/* Metadata */}
          <div className={`flex flex-wrap items-center text-gray-500 text-sm ${isPrimary ? 'mt-6' : 'mt-4'}`}>
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
