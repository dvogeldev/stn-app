import React from 'react';

export const AboutParish = () => { // Changed to named export
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title and Description */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 rounded-lg">
          About Our Parish
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto mb-12 rounded-lg">
          We are a vibrant Orthodox Christian community in Grand Rapids, part of the
          Antiochian Orthodox Christian Archdiocese of North America.
        </p>

        {/* Feature Cards Container */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Worship Card */}
          <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-50 text-blue-600 mb-6">
              {/* Heart Icon (Placeholder SVG) */}
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 rounded-lg">Worship</h3>
            <p className="text-gray-600 text-center rounded-lg">
              We gather weekly for Divine Liturgy, following
              the ancient traditions passed down through the
              centuries of Orthodox Christianity.
            </p>
          </div>

          {/* Community Card */}
          <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-50 text-red-600 mb-6">
              {/* Users Icon (Placeholder SVG) */}
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h2a2 2 0 002-2V7.5a2.5 2.5 0 00-2.5-2.5h-10A2.5 2.5 0 005 7.5V18a2 2 0 002 2h2m4-12h-4m4 0a2 2 0 100-4 2 2 0 000 4zm0 0v-2m0 2h2m-2 0a2 2 0 100-4 2 2 0 000 4zm0 0v-2m0 2h2"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 rounded-lg">Community</h3>
            <p className="text-gray-600 text-center rounded-lg">
              Our parish family welcomes all who seek to
              grow in faith, whether you're new to Orthodoxy
              or a lifelong member.
            </p>
          </div>

          {/* Learning Card */}
          <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-50 text-yellow-600 mb-6">
              {/* Book Icon (Placeholder SVG) */}
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.747 0-3.332.477-4.5 1.253"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 rounded-lg">Learning</h3>
            <p className="text-gray-600 text-center rounded-lg">
              We offer classes, study groups, and
              educational opportunities to deepen your
              understanding of Orthodox faith and practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
