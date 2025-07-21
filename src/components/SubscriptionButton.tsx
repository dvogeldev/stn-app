import React from 'react';
import { Button } from '@/components/ui/button';
import { openSubscriptionUrl } from '@/lib/calendarSubscription';

interface SubscriptionButtonProps {
  platform: 'google' | 'outlook' | 'ios';
  className?: string;
}

// Platform-specific configurations
const platformConfig = {
  google: {
    label: 'Google Calendar',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.5 3h-1V1.5a.5.5 0 0 0-1 0V3h-11V1.5a.5.5 0 0 0-1 0V3h-1A2.5 2.5 0 0 0 2 5.5v13A2.5 2.5 0 0 0 4.5 21h15a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 19.5 3zM21 18.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5V8h18v10.5zM21 7H3V5.5A1.5 1.5 0 0 1 4.5 4h1v1.5a.5.5 0 0 0 1 0V4h11v1.5a.5.5 0 0 0 1 0V4h1A1.5 1.5 0 0 1 21 5.5V7z"/>
        <path d="M7 10h2v2H7zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zM7 13h2v2H7zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zM7 16h2v2H7zm3 0h2v2h-2zm3 0h2v2h-2z"/>
      </svg>
    ),
    bgColor: 'bg-blue-600 hover:bg-blue-700',
    textColor: 'text-white',
    borderColor: 'border-blue-600'
  },
  outlook: {
    label: 'Outlook',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.88 12.04q0 .45-.11.87-.1.41-.33.74-.22.33-.58.52-.37.2-.87.2t-.85-.2q-.35-.21-.57-.55-.22-.33-.33-.75-.1-.42-.1-.83 0-.43.1-.85.11-.41.33-.74.22-.33.57-.52.35-.19.85-.19t.87.19q.36.19.58.52.22.33.33.74.11.42.11.85zM21.5 22.5h-19v-21h19v21zm-18-1h17v-19h-17v19zm1.5-2.5v-14h14v14h-14zm1-13v12h12v-12h-12z"/>
      </svg>
    ),
    bgColor: 'bg-blue-700 hover:bg-blue-800',
    textColor: 'text-white',
    borderColor: 'border-blue-700'
  },
  ios: {
    label: 'iOS Calendar',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
      </svg>
    ),
    bgColor: 'bg-gray-800 hover:bg-gray-900',
    textColor: 'text-white',
    borderColor: 'border-gray-800'
  }
};

export default function SubscriptionButton({ platform, className = '' }: SubscriptionButtonProps) {
  const config = platformConfig[platform];
  
  const handleClick = () => {
    openSubscriptionUrl(platform);
  };

  return (
    <Button
      onClick={handleClick}
      className={`
        flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors
        ${config.bgColor} ${config.textColor} border ${config.borderColor}
        ${className}
      `}
      variant="default"
    >
      {config.icon}
      <span>{config.label}</span>
    </Button>
  );
}