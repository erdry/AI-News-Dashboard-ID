import { DB } from '@cloudflare/workers-types';

export interface NewsApiResponse {
  success: boolean;
  data: any;
  error?: string;
}

export async function GET(request: Request, { params }: { params: { categoryId: string } }) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const categoryId = parseInt(params.categoryId);
    
    // Get D1 database instance from environment
    const db = (process.env as any).DB as DB;
    
    // Fetch news items for the specified category
    const { results } = await db
      .prepare(`
        SELECT n.*, s.name as source_name, c.name as category_name
        FROM news_items n
        JOIN sources s ON n.source_id = s.id
        JOIN categories c ON n.category_id = c.id
        WHERE n.category_id = ?
        ORDER BY n.created_at DESC
        LIMIT ?
      `)
      .bind(categoryId, limit)
      .all();
    
    // Return the news items as JSON
    return Response.json({
      success: true,
      data: results
    } as NewsApiResponse);
  } catch (error) {
    console.error('Error fetching category news:', error);
    return Response.json({
      success: false,
      data: null,
      error: 'Failed to fetch news for this category'
    } as NewsApiResponse, { status: 500 });
  }
}
