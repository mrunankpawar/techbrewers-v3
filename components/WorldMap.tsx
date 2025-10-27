'use client';

import React from 'react';

const WorldMap = () => {
  // Countries and their capitals with approximate coordinates (percentage-based for SVG)
  const countryMarkers = [
    { country: 'USA', capital: 'Washington', x: '25%', y: '40%' },
    { country: 'UK', capital: 'London', x: '48%', y: '30%' },
    { country: 'India', capital: 'New Delhi', x: '68%', y: '45%' },
    { country: 'Germany', capital: 'Berlin', x: '52%', y: '30%' },
    { country: 'Canada', capital: 'Ottawa', x: '20%', y: '25%' },
    { country: 'Australia', capital: 'Canberra', x: '78%', y: '70%' },
    { country: 'Japan', capital: 'Tokyo', x: '82%', y: '42%' },
    { country: 'France', capital: 'Paris', x: '50%', y: '32%' },
    { country: 'Brazil', capital: 'Brasilia', x: '32%', y: '62%' },
    { country: 'UAE', capital: 'Abu Dhabi', x: '60%', y: '48%' },
  ];

  return (
    <div className="relative py-20 px-6 gradient-background">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-6">
            Global Reach
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Join TechThrusters community members from around the world. Learn, connect, and build together.
          </p>
        </div>

        {/* World Map Container */}
        <div className="relative bg-black/30 rounded-2xl p-8 md:p-16 overflow-hidden border border-orange-300/20">
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Simplified Continental Shapes */}
            
            {/* North America */}
            <path
              d="M50 150 Q120 80, 180 150 T280 160 Q320 140, 350 170 Q380 200, 400 220 Q420 240, 450 250 Q470 260, 500 260 Q480 280, 450 300 L280 270 L150 230 Z"
              fill="#3a2a1f"
              className="hover:fill-orange-500/20 transition-colors"
              stroke="rgba(197, 79, 14, 0.2)"
              strokeWidth="1"
            />
            
            {/* South America */}
            <path
              d="M250 310 Q270 300, 300 310 Q320 320, 340 340 Q350 370, 340 400 Q330 430, 310 450 Q290 470, 270 480 Q240 485, 220 470 Q200 450, 200 420 Q195 390, 230 380 Q240 340, 250 310 Z"
              fill="#3a2a1f"
              className="hover:fill-orange-500/20 transition-colors"
              stroke="rgba(197, 79, 14, 0.2)"
              strokeWidth="1"
            />
            
            {/* Europe */}
            <path
              d="M440 150 Q460 140, 480 155 Q490 170, 495 190 Q495 220, 480 240 Q460 260, 440 265 Q420 260, 410 250 L440 150 Z"
              fill="#3a2a1f"
              className="hover:fill-orange-500/20 transition-colors"
              stroke="rgba(197, 79, 14, 0.2)"
              strokeWidth="1"
            />
            
            {/* Africa */}
            <path
              d="M500 200 Q520 210, 540 230 Q550 260, 555 300 Q555 340, 545 380 Q530 420, 510 440 Q490 450, 470 445 Q450 435, 445 410 L500 200 Z"
              fill="#3a2a1f"
              className="hover:fill-orange-500/20 transition-colors"
              stroke="rgba(197, 79, 14, 0.2)"
              strokeWidth="1"
            />
            
            {/* Asia */}
            <path
              d="M550 120 Q600 130, 650 140 Q700 150, 750 160 Q800 170, 840 180 Q880 190, 900 210 Q910 230, 905 260 Q890 290, 860 320 Q840 340, 810 350 Q780 355, 750 350 Q720 340, 700 320 Q680 300, 660 280 Q640 260, 625 240 Q600 210, 580 190 Q570 160, 565 140 Z"
              fill="#3a2a1f"
              className="hover:fill-orange-500/20 transition-colors"
              stroke="rgba(197, 79, 14, 0.2)"
              strokeWidth="1"
            />
            
            {/* Australia */}
            <path
              d="M750 380 Q780 385, 800 400 Q810 420, 800 445 Q785 470, 760 475 Q735 470, 725 450 Q720 425, 750 380 Z"
              fill="#3a2a1f"
              className="hover:fill-orange-500/20 transition-colors"
              stroke="rgba(197, 79, 14, 0.2)"
              strokeWidth="1"
            />

            {/* Country Markers */}
            {countryMarkers.map((marker, index) => (
              <g key={index}>
                {/* Pulse Circle Animation */}
                <circle
                  cx={marker.x}
                  cy={marker.y}
                  r="8"
                  fill="#C54F0E"
                  opacity="0.6"
                  className="animate-ping"
                />
                {/* Main Marker */}
                <circle
                  cx={marker.x}
                  cy={marker.y}
                  r="6"
                  fill="#C54F0E"
                  className="hover:fill-orange-500 transition-colors cursor-pointer"
                />
                {/* Inner Circle */}
                <circle
                  cx={marker.x}
                  cy={marker.y}
                  r="3"
                  fill="white"
                />
                {/* Label */}
                <text
                  x={marker.x}
                  y={`${parseFloat(marker.y) + 20}%`}
                  fill="#C54F0E"
                  fontSize="10"
                  textAnchor="middle"
                  className="font-semibold"
                >
                  {marker.country}
                </text>
              </g>
            ))}
          </svg>

          {/* Countries List */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
            {countryMarkers.map((marker, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg border border-orange-300/10 hover:border-orange-400/30 transition-colors bg-black/20"
              >
                <div className="text-orange-400 font-bold text-lg mb-1">
                  {marker.capital}
                </div>
                <div className="text-gray-400 text-sm">
                  {marker.country}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;

