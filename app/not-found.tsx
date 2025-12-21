import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black-100 py-8">
      {/* Image Section */}
      <div className="mb-6">
        <Image
          src="/images/404e.png"
          alt="Page Not Found"
          width={400}
          height={400}
          className="w-2/3 sm:w-1/3 md:w-1/6 h-auto mx-auto"
        />
      </div>
      
      {/* Text Section */}
      <p className="mb-6 text-center text-lg sm:text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>

      {/* Button Section */}
      <Link href="/" legacyBehavior>
        <a className="px-6 py-3 bg-violet-500 text-white text-sm sm:text-base rounded-lg shadow-md hover:bg-violet-600 transition-all">
          Go Back Home
        </a>
      </Link>
    </div>
  );
}
