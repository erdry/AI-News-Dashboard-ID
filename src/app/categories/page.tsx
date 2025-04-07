import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Indonesia News - Categories",
  description: "AI technology news by category for the Indonesian market",
};

export default function Categories() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          News by Category
        </h1>
        <p className="text-gray-600">
          Browse AI technology news organized by category to find information relevant to your interests.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">AI Applications</h2>
          <p className="text-gray-600 mb-4">
            New AI applications, products, or services being developed or deployed in Indonesia.
          </p>
          <Link 
            href="/categories/1" 
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
          >
            View news
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">AI Policy and Regulation</h2>
          <p className="text-gray-600 mb-4">
            Regulatory developments, policy announcements, and government initiatives related to AI in Indonesia.
          </p>
          <Link 
            href="/categories/2" 
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
          >
            View news
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">AI in Indonesian Industries</h2>
          <p className="text-gray-600 mb-4">
            How AI is transforming specific industries in Indonesia including finance, healthcare, agriculture, and more.
          </p>
          <Link 
            href="/categories/3" 
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
          >
            View news
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">AI Investment and Funding</h2>
          <p className="text-gray-600 mb-4">
            Investments, funding rounds, and financial developments in Indonesia's AI ecosystem.
          </p>
          <Link 
            href="/categories/4" 
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
          >
            View news
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">AI Talent and Education</h2>
          <p className="text-gray-600 mb-4">
            Developments in AI education, training, and talent market in Indonesia.
          </p>
          <Link 
            href="/categories/5" 
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
          >
            View news
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">AI Infrastructure</h2>
          <p className="text-gray-600 mb-4">
            Developments in the infrastructure supporting AI in Indonesia including cloud computing and data centers.
          </p>
          <Link 
            href="/categories/6" 
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
          >
            View news
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">International AI Partnerships</h2>
          <p className="text-gray-600 mb-4">
            International collaborations, partnerships, and foreign AI companies operating in Indonesia.
          </p>
          <Link 
            href="/categories/7" 
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
          >
            View news
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
