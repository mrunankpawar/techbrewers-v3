import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" legacyBehavior>
        <a className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
          Go Back Home
        </a>
      </Link>
    </div>
  );
}