import React from 'react';
import { Church } from 'lucide-react'; // Importing Lucide icon

export const FirstTimeVisitorInfo = () => {
  return (
    <div className="bg-card border border-border p-8 rounded-xl shadow-lg flex flex-col h-full">
      <div className="flex items-center mb-6">
        <Church className="h-10 w-10 text-primary mr-4" />
        <h3 className="text-3xl font-bold text-card-foreground rounded-lg">First Time Visitors</h3>
      </div>
      <p className="mt-4 text-lg text-muted-foreground mb-6 rounded-lg">
        If you&apos;re new to Orthodox worship, we understand it can feel
        unfamiliar. Please don&apos;t worry about &quot;doing everything right&quot; -
        simply come and experience the beauty of our ancient liturgy.
      </p>
      <ul className="list-disc list-inside text-muted-foreground text-lg space-y-3 mb-8">
        <li>Arrive a few minutes early to get settled</li>
        <li>Feel free to ask questions after the service</li>
        <li>Stay for coffee hour to meet the community</li>
        <li>Dress modestly but don&apos;t worry about formal attire</li>
      </ul>
      <div className="mt-auto"> {/* Pushes the button to the bottom */}
        <a
          href="/plan-your-visit" // Link to a page with more visitor info
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 md:py-4 md:px-10 text-lg transition-colors duration-300 shadow-md w-full"
        >
          Plan Your First Visit
        </a>
      </div>
    </div>
  );
};

