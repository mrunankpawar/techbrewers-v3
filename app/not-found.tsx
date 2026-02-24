import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center gradient-background overflow-hidden py-8 px-6">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 via-orange-500/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
        {/* Image Section */}
        <div className="mb-8">
          <Image
            src="/images/404e.png"
            alt="Page Not Found"
            width={400}
            height={400}
            className="w-2/3 sm:w-1/2 md:w-1/3 h-auto mx-auto opacity-80"
          />
        </div>
        
        {/* Text Section */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
            Page Not Found
          </span>
        </h1>
        
        <p className="mb-8 text-center text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>

        {/* Button Section */}
        <Link 
          href="/"
          className="inline-flex items-center px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white text-base font-semibold rounded-lg transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
