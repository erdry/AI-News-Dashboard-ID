import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Indonesia News - Home",
  description: "Latest AI technology news impacting the Indonesian market",
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI Technology News for Indonesian Market
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your daily source for the latest AI technology developments and their impact on Indonesia's market
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Latest Reports</h2>
          <p className="text-gray-600 mb-4">
            Access comprehensive daily reports analyzing AI technology developments and their potential impact on the Indonesian market.
          </p>
          <Link 
            href="/reports" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            View Reports
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">News by Category</h2>
          <p className="text-gray-600 mb-4">
            Browse AI news organized by categories such as applications, policy, industries, investment, talent, infrastructure, and partnerships.
          </p>
          <Link 
            href="/categories" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Explore Categories
          </Link>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About This Platform</h2>
        <p className="text-gray-600 mb-6">
          This platform collects and analyzes the latest AI technology news relevant to the Indonesian market. 
          Our comprehensive reports provide insights into how AI developments may impact various sectors of 
          Indonesia's economy, from financial services and healthcare to agriculture and education.
        </p>
        <p className="text-gray-600">
          Data is sourced from Indonesian tech news websites, international sources with Indonesia coverage, 
          government sources, tech companies, and research institutions to provide a complete picture of the 
          AI landscape in Indonesia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">AI Applications</h3>
          <p className="text-gray-600">
            New AI applications, products, or services being developed or deployed in Indonesia.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">AI Policy & Regulation</h3>
          <p className="text-gray-600">
            Regulatory developments, policy announcements, and government initiatives related to AI.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Industry Impact</h3>
          <p className="text-gray-600">
            How AI is transforming specific industries across Indonesia's diverse economy.
          </p>
        </div>
      </div>
    </div>
  );
}
