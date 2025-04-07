import { DB } from '@cloudflare/workers-types';

export interface ReportApiResponse {
  success: boolean;
  data: any;
  error?: string;
}

export async function GET(request: Request, { params }: { params: { date: string } }) {
  try {
    const date = params.date;
    
    // Get D1 database instance from environment
    const db = (process.env as any).DB as DB;
    
    // Fetch specific report by date
    const result = await db
      .prepare(`
        SELECT * FROM reports
        WHERE date = ?
        LIMIT 1
      `)
      .bind(date)
      .first();
    
    if (!result) {
      return Response.json({
        success: false,
        data: null,
        error: 'Report not found'
      } as ReportApiResponse, { status: 404 });
    }
    
    // Return the report as JSON
    return Response.json({
      success: true,
      data: result
    } as ReportApiResponse);
  } catch (error) {
    console.error('Error fetching report:', error);
    return Response.json({
      success: false,
      data: null,
      error: 'Failed to fetch report'
    } as ReportApiResponse, { status: 500 });
  }
}
