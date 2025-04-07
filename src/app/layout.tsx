import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Indonesia News - Layout",
  description: "Latest AI technology news impacting the Indonesian market",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <Link href="/" className="flex items-center">
                  <span className="text-2xl font-bold text-blue-600">AI Indonesia News</span>
                </Link>
              </div>
              <nav className="flex space-x-6">
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                  Home
                </Link>
                <Link href="/reports" className="text-gray-700 hover:text-blue-600 font-medium">
                  Reports
                </Link>
                <Link href="/categories" className="text-gray-700 hover:text-blue-600 font-medium">
                  Categories
                </Link>
              </nav>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-50 border-t border-gray-200 mt-12">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">About</h3>
                <p className="text-gray-600">
                  AI Indonesia News provides the latest information about AI technology developments 
                  and their impact on the Indonesian market.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-600 hover:text-blue-600">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/reports" className="text-gray-600 hover:text-blue-600">
                      Reports
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories" className="text-gray-600 hover:text-blue-600">
                      Categories
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/categories/1" className="text-gray-600 hover:text-blue-600">
                      AI Applications
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/2" className="text-gray-600 hover:text-blue-600">
                      AI Policy and Regulation
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/3" className="text-gray-600 hover:text-blue-600">
                      AI in Indonesian Industries
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
              <p>&copy; {new Date().getFullYear()} AI Indonesia News. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
