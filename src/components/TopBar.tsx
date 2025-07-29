// src/components/TopBar.tsx
import React from 'react';

interface TopBarProps {
  message?: string;
  show?: boolean;
}

export function TopBar({ 
  message = "Welcome to St. Nicholas Orthodox Church, Grand Rapids, Michigan.",
  show = true 
}: TopBarProps) {
  if (!show) {
    return null;
  }

  return (
    <div className="bg-gray-800 text-white py-2 text-center text-base">
      <div className="container mx-auto px-4">
        <span className="text-gray-100">{message}</span>
      </div>
    </div>
  );
}