import { DB } from '@cloudflare/workers-types';

export interface ReportApiResponse {
  success: boolean;
  data: any;
  error?: string;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    
    // Get D1 database instance from environment
    const db = (process.env as any).DB as DB;
    
    // Fetch latest reports
    const { results } = await db
      .prepare(`
        SELECT * FROM reports
        ORDER BY date DESC
        LIMIT ?
      `)
      .bind(limit)
      .all();
    
    // Return the reports as JSON
    return Response.json({
      success: true,
      data: results
    } as ReportApiResponse);
  } catch (error) {
    console.error('Error fetching reports:', error);
    return Response.json({
      success: false,
      data: null,
      error: 'Failed to fetch reports'
    } as ReportApiResponse, { status: 500 });
  }
}
