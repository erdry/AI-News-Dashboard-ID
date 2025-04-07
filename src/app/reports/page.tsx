import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Indonesia News - Reports",
  description: "Daily reports on AI technology news impacting the Indonesian market",
};

export default function Reports() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          AI Technology Reports
        </h1>
        <p className="text-gray-600">
          Comprehensive daily reports analyzing AI technology developments and their potential impact on the Indonesian market.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-12">
        {/* This will be replaced with dynamic data from the backend */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              AI Technology News Impact on Indonesian Market
            </h2>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
              April 5, 2025
            </span>
          </div>
          <div className="prose max-w-none mb-4">
            <h3 className="text-xl font-medium text-gray-700 mb-2">Key Highlights</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Indonesian startup launches AI-powered customer service platform with 95% accuracy in Bahasa Indonesia</li>
              <li>New AI translation tool now supports 10 Indonesian regional languages</li>
              <li>Indonesian Government announces comprehensive National AI Strategy</li>
              <li>AI adoption in Indonesian banking sector grows 40% in Q1 2025</li>
              <li>Foreign investment in Indonesian AI startups reaches $150 million in Q1 2025</li>
            </ul>
          </div>
          <Link 
            href="/reports/2025-04-05" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Read Full Report
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              AI Technology News Impact on Indonesian Market
            </h2>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
              April 4, 2025
            </span>
          </div>
          <div className="prose max-w-none mb-4">
            <h3 className="text-xl font-medium text-gray-700 mb-2">Key Highlights</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Indonesia's Ministry of Education launches AI curriculum for high schools</li>
              <li>Local AI startup secures $25 million in Series B funding</li>
              <li>New AI-powered fraud detection system deployed by major Indonesian banks</li>
              <li>Indonesian researchers develop AI model for local crop disease detection</li>
              <li>Tech giants announce AI research center in Jakarta</li>
            </ul>
          </div>
          <Link 
            href="/reports/2025-04-04" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Read Full Report
          </Link>
        </div>
      </div>

      <div className="flex justify-center">
        <nav className="inline-flex rounded-md shadow-sm">
          <span className="px-4 py-2 text-gray-500 bg-white border border-gray-300 rounded-l-md">
            Previous
          </span>
          <span className="px-4 py-2 text-white bg-blue-600 border border-blue-600">
            1
          </span>
          <Link 
            href="/reports?page=2" 
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
          >
            2
          </Link>
          <Link 
            href="/reports?page=3" 
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
          >
            3
          </Link>
          <Link 
            href="/reports?page=2" 
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50"
          >
            Next
          </Link>
        </nav>
      </div>
    </div>
  );
}
