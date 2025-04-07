import { DB } from '@cloudflare/workers-types';

export interface NewsApiResponse {
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
    
    // Fetch latest news items across all categories
    const { results } = await db
      .prepare(`
        SELECT n.*, s.name as source_name, c.name as category_name
        FROM news_items n
        JOIN sources s ON n.source_id = s.id
        JOIN categories c ON n.category_id = c.id
        ORDER BY n.created_at DESC
        LIMIT ?
      `)
      .bind(limit)
      .all();
    
    // Return the news items as JSON
    return Response.json({
      success: true,
      data: results
    } as NewsApiResponse);
  } catch (error) {
    console.error('Error fetching latest news:', error);
    return Response.json({
      success: false,
      data: null,
      error: 'Failed to fetch latest news'
    } as NewsApiResponse, { status: 500 });
  }
}
