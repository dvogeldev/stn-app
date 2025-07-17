import React from 'react';

export const QuestionsAboutOrthodoxySection = () => {
  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-r from-red-50 to-orange-50 font-sans rounded-xl shadow-xl mx-auto max-w-7xl mt-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 rounded-lg">
          Questions About Orthodoxy?
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto mb-12 rounded-lg">
          Whether you're curious about Orthodox Christianity, considering conversion, or looking
          for a spiritual home, we're here to help. Our priests and community members are always
          available to discuss faith, answer questions, and provide guidance.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/schedule-meeting" // Link to a scheduling page or contact form
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:px-10 text-lg transition-colors duration-300 shadow-md"
          >
            Schedule a Meeting
          </a>
          <a
            href="/study-groups" // Link to a page about study groups
            className="inline-flex items-center justify-center px-8 py-3 border border-orange-600 text-base font-medium rounded-md text-orange-800 bg-orange-100 hover:bg-orange-200 md:py-4 md:px-10 text-lg transition-colors duration-300 shadow-md"
          >
            Join a Study Group
          </a>
        </div>
      </div>
    </section>
  );
};

