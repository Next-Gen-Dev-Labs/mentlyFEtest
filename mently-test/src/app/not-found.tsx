import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <main className="text-center p-6">
        <h1 className="font-chivo text-6xl md:text-8xl font-bold text-primary mb-4">
          404
        </h1>
        <h2 className="font-chivo text-2xl md:text-3xl font-medium text-gray-800 mb-6">
          Page Not Found
        </h2>
        <p className="font-chivo text-lg md:text-xl text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-white font-chivo font-medium px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Return to homepage"
        >
          Back to Home
        </Link>
      </main>
    </div>
  );
}
