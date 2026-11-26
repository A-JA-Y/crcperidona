import Link from "next/link";

export default function CmsUnavailable() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-center">
      <div className="p-8 rounded-2xl border border-gray-200 bg-gray-50/60 inline-block max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Content temporarily unavailable
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-6">
          The requested article or page cannot be loaded right now. Please try again shortly.
        </p>
        <Link
          href="/blog"
          className="inline-block px-5 py-2.5 rounded-full text-sm font-medium text-white bg-amber-700 hover:bg-amber-800 transition-colors"
        >
          Return to Blog
        </Link>
      </div>
    </div>
  );
}
