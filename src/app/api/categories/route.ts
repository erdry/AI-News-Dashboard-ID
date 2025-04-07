import { DB } from '@cloudflare/workers-types';

export interface CategoriesApiResponse {
  success: boolean;
  data: any;
  error?: string;
}

export async function GET() {
  try {
    // Get D1 database instance from environment
    const db = (process.env as any).DB as DB;
    
    // Fetch all categories
    const { results } = await db
      .prepare(`
        SELECT * FROM categories
        ORDER BY name
      `)
      .all();
    
    // Return the categories as JSON
    return Response.json({
      success: true,
      data: results
    } as CategoriesApiResponse);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return Response.json({
      success: false,
      data: null,
      error: 'Failed to fetch categories'
    } as CategoriesApiResponse, { status: 500 });
  }
}
