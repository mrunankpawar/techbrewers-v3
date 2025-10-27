import React from 'react';

const FeaturesShowcase = () => {
  // Sample images for the carousel
  const showcaseImages = [
    { id: 1, src: "/images/events/android.png", alt: "Android Development" },
    { id: 2, src: "/images/events/angular.png", alt: "Angular Framework" },
    { id: 3, src: "/images/events/cloud.png", alt: "Cloud Computing" },
    { id: 4, src: "/images/events/devrel.png", alt: "Developer Relations" },
    { id: 5, src: "/images/events/gitgithub.png", alt: "Git & GitHub" },
    { id: 6, src: "/images/events/hackathonChats.png", alt: "Hackathons" },
    { id: 7, src: "/images/events/hacktoberfest.png", alt: "Hacktoberfest" },
    { id: 8, src: "/images/events/kevin.png", alt: "Tech Talks" },
    { id: 9, src: "/images/events/oshack.png", alt: "Open Source" },
    { id: 10, src: "/images/events/personalBranding.png", alt: "Personal Branding" },
    { id: 11, src: "/images/events/pm2.png", alt: "Product Management" },
    { id: 12, src: "/images/events/productManagement.png", alt: "Product Strategy" },
  ];

  const features = [
    {
      title: "Seamless API Integrations",
      description: "TechThrusters supports a wide range of third-party integrations.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Trusted Authentication",
      description: "Quickly integrate with major platforms to workflows.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "AI-Speech Recognition",
      description: "Enable your user to control or navigate your site using speech.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4z" />
          <path d="M5.5 9.643a.75.75 0 00-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5a.75.75 0 001.5 0v-1.546A6.001 6.001 0 0016 10v-.357a.75.75 0 00-1.5 0V10a4.5 4.5 0 11-9 0v-.357z" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative py-20 px-6 gradient-background">
      {/* Gradient continuation */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Features Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-orange-700 rounded-full px-4 py-2 mb-6">
            <svg className="w-4 h-4 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span className="text-white text-sm font-medium">Features</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-6">
            Packed with Innovation.
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            TechThrusters is packed with cutting-edge features designed to elevate your 
            tech journey and portfolio.
          </p>
          
          <button className="bg-orange-700 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Book an Appointment
          </button>
        </div>

        {/* Image Carousel */}
        <div className="relative mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {showcaseImages.slice(0, 8).map((image, index) => (
              <div
                key={image.id}
                className="relative group cursor-pointer"
                style={{
                  transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (Math.random() * 10 + 5)}deg)`,
                }}
              >
                <div className="w-full h-32 bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-orange-500 transition-colors">
                  <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-orange-700/20 flex items-center justify-center">
                    <span className="text-orange-400 text-sm font-medium">
                      {image.alt}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-orange-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-orange-700 rounded-lg mb-6 group-hover:bg-orange-600 transition-colors">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesShowcase;
