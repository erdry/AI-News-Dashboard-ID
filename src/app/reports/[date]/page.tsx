import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "AI Indonesia News - Report Detail",
  description: "Detailed AI technology news report for the Indonesian market",
};

// This would be replaced with dynamic data in the actual implementation
export default function ReportDetail({ params }: { params: { date: string } }) {
  // In a real implementation, we would fetch the report data based on the date parameter
  const date = params.date;
  
  // For demonstration purposes
  if (date !== "2025-04-05") {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link 
          href="/reports" 
          className="text-blue-600 hover:text-blue-800 inline-flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Reports
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 mb-8">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            AI Technology News Impact on Indonesian Market
          </h1>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
            April 5, 2025
          </span>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Executive Summary</h2>
          <p>
            This report provides a comprehensive overview of the latest developments in AI technology 
            that may directly impact the Indonesian market. The information has been collected from 
            various reliable sources including Indonesian tech news websites, international sources 
            with Indonesia coverage, government sources, tech companies, and research institutions.
          </p>

          <h2>Key Highlights</h2>
          <ul>
            <li>Indonesian startup launches AI-powered customer service platform with 95% accuracy in Bahasa Indonesia</li>
            <li>New AI translation tool now supports 10 Indonesian regional languages</li>
            <li>Indonesian Government announces comprehensive National AI Strategy</li>
            <li>AI adoption in Indonesian banking sector grows 40% in Q1 2025</li>
            <li>Foreign investment in Indonesian AI startups reaches $150 million in Q1 2025</li>
          </ul>

          <h2>AI Applications</h2>
          
          <h3>Indonesian Startup Launches AI-Powered Customer Service Platform</h3>
          <p>
            Jakarta-based startup TechSolve has launched an AI-powered customer service platform that 
            can handle inquiries in Bahasa Indonesia with 95% accuracy. The platform is already being 
            adopted by several major e-commerce companies in Indonesia.
          </p>
          <p>
            <strong>Source:</strong> <a href="https://tekno.kompas.com/read/2025/04/05/ai-customer-service-platform" target="_blank" rel="noopener noreferrer">Kompas Tekno</a>
          </p>

          <h3>AI Translation Tool Supports 10 Indonesian Regional Languages</h3>
          <p>
            A new AI translation tool now supports 10 Indonesian regional languages including Javanese, 
            Sundanese, and Balinese. This development is expected to help preserve local languages while 
            improving digital accessibility across the archipelago.
          </p>
          <p>
            <strong>Source:</strong> <a href="https://inet.detik.com/cyberlife/d-7123456/ai-translation-tool-supports-regional-languages" target="_blank" rel="noopener noreferrer">Detik Inet</a>
          </p>

          <h2>AI Policy and Regulation</h2>
          
          <h3>Indonesian Government Announces National AI Strategy</h3>
          <p>
            The Indonesian Ministry of Communication and Information Technology has announced a 
            comprehensive National AI Strategy aimed at positioning Indonesia as a regional leader 
            in AI development by 2030. The strategy includes regulatory frameworks, investment 
            incentives, and educational initiatives.
          </p>
          <p>
            <strong>Source:</strong> <a href="https://www.kominfo.go.id/content/detail/12345/government-announces-national-ai-strategy/0/berita" target="_blank" rel="noopener noreferrer">Kementerian Komunikasi dan Informatika</a>
          </p>

          <h2>AI in Indonesian Industries</h2>
          
          <h3>AI Adoption in Indonesian Banking Sector Grows 40% in 2025</h3>
          <p>
            A recent study shows that AI adoption in Indonesia's banking sector has grown by 40% in 
            the first quarter of 2025. Banks are primarily implementing AI for fraud detection, 
            credit scoring, and personalized customer services.
          </p>
          <p>
            <strong>Source:</strong> <a href="https://www.thejakartapost.com/business/2025/04/05/ai-adoption-in-indonesian-banking-sector-grows-40-percent.html" target="_blank" rel="noopener noreferrer">The Jakarta Post</a>
          </p>

          <h3>Indonesian Farmers Embrace AI for Crop Management</h3>
          <p>
            Farmers in Central Java are increasingly using AI-powered mobile applications to optimize 
            crop management. These tools provide personalized recommendations for fertilizer use, 
            pest control, and harvest timing based on local conditions and weather forecasts.
          </p>
          <p>
            <strong>Source:</strong> <a href="https://www.antaranews.com/berita/12345/petani-indonesia-gunakan-ai-untuk-manajemen-tanaman" target="_blank" rel="noopener noreferrer">Antara News</a>
          </p>

          <h2>AI Investment and Funding</h2>
          
          <h3>Foreign Investment in Indonesian AI Startups Reaches $150 Million in Q1 2025</h3>
          <p>
            Foreign investment in Indonesian AI startups has reached $150 million in the first quarter 
            of 2025, marking a 75% increase compared to the same period last year. Singapore, China, 
            and the United States are the top sources of investment.
          </p>
          <p>
            <strong>Source:</strong> <a href="https://id.techinasia.com/investasi-asing-startup-ai-indonesia-q1-2025" target="_blank" rel="noopener noreferrer">Tech in Asia Indonesia</a>
          </p>

          <h2>Market Impact Analysis</h2>
          
          <h3>Short-term Impacts (0-6 months)</h3>
          <p>
            The increasing adoption of AI in customer service is likely to create immediate efficiency 
            gains for Indonesian businesses, particularly in e-commerce and financial services. Companies 
            that quickly implement these solutions may gain competitive advantages through cost reduction 
            and improved customer satisfaction.
          </p>

          <h3>Medium-term Outlook (6-18 months)</h3>
          <p>
            The National AI Strategy will likely accelerate AI adoption across multiple sectors. We can 
            expect increased government funding for AI research and development, as well as new regulatory 
            frameworks that may shape how AI is deployed in sensitive sectors like healthcare and finance.
          </p>

          <h3>Long-term Considerations (18+ months)</h3>
          <p>
            The growing foreign investment in Indonesian AI startups indicates long-term confidence in 
            the market. This could lead to Indonesia becoming a regional hub for AI development, 
            particularly for solutions tailored to Southeast Asian markets and languages.
          </p>

          <h2>References</h2>
          <ul>
            <li><a href="https://tekno.kompas.com/read/2025/04/05/ai-customer-service-platform" target="_blank" rel="noopener noreferrer">Indonesian Startup Launches AI-Powered Customer Service Platform</a> - Kompas Tekno</li>
            <li><a href="https://inet.detik.com/cyberlife/d-7123456/ai-translation-tool-supports-regional-languages" target="_blank" rel="noopener noreferrer">AI Translation Tool Supports 10 Indonesian Regional Languages</a> - Detik Inet</li>
            <li><a href="https://www.kominfo.go.id/content/detail/12345/government-announces-national-ai-strategy/0/berita" target="_blank" rel="noopener noreferrer">Indonesian Government Announces National AI Strategy</a> - Kementerian Komunikasi dan Informatika</li>
            <li><a href="https://www.thejakartapost.com/business/2025/04/05/ai-adoption-in-indonesian-banking-sector-grows-40-percent.html" target="_blank" rel="noopener noreferrer">AI Adoption in Indonesian Banking Sector Grows 40% in 2025</a> - The Jakarta Post</li>
            <li><a href="https://www.antaranews.com/berita/12345/petani-indonesia-gunakan-ai-untuk-manajemen-tanaman" target="_blank" rel="noopener noreferrer">Indonesian Farmers Embrace AI for Crop Management</a> - Antara News</li>
            <li><a href="https://id.techinasia.com/investasi-asing-startup-ai-indonesia-q1-2025" target="_blank" rel="noopener noreferrer">Foreign Investment in Indonesian AI Startups Reaches $150 Million in Q1 2025</a> - Tech in Asia Indonesia</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
