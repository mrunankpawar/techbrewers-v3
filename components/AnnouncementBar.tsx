'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('techthrusters-visited');
    
    if (!hasVisited) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    // Mark as visited for future visits
    localStorage.setItem('techthrusters-visited', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-orange-700 via-orange-600 to-orange-700 text-white py-3 px-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center relative">
        {/* Announcement Content - Centered */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
          <span className="text-sm bg-gradient-to-r from-white via-orange-50 to-white bg-clip-text text-transparent">
            <a 
              href="https://bit.ly/TBDISCORD" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-orange-200 transition-colors font-semibold"
            >
              Join our Discord community
            </a>
            {' '}for the latest tech events and networking opportunities.
          </span>
        </div>

        {/* Dismiss Button - Absolute positioned */}
        <button
          onClick={handleDismiss}
          className="absolute right-4 p-1 hover:bg-orange-800/50 rounded-full transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
