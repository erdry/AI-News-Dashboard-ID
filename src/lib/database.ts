import { DB } from '@cloudflare/workers-types';

export interface NewsItem {
  id?: number;
  title: string;
  url: string;
  source_id: number;
  category_id: number;
  date: string;
  snippet: string;
  created_at?: string;
  source_name?: string;
  category_name?: string;
}

export interface Source {
  id?: number;
  name: string;
  url: string;
  category: string;
  language: string;
  search_path: string;
  created_at?: string;
}

export interface Category {
  id?: number;
  name: string;
  description: string;
  created_at?: string;
}

export interface Report {
  id?: number;
  date: string;
  title: string;
  content: string;
  created_at?: string;
}

// Database operations for news items
export async function getLatestNewsItems(db: DB, limit: number = 10): Promise<NewsItem[]> {
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
  
  return results as NewsItem[];
}

export async function getNewsByCategory(db: DB, categoryId: number, limit: number = 10): Promise<NewsItem[]> {
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
  
  return results as NewsItem[];
}

// Database operations for categories
export async function getAllCategories(db: DB): Promise<Category[]> {
  const { results } = await db
    .prepare('SELECT * FROM categories ORDER BY name')
    .all();
  
  return results as Category[];
}

// Database operations for sources
export async function getAllSources(db: DB): Promise<Source[]> {
  const { results } = await db
    .prepare('SELECT * FROM sources ORDER BY name')
    .all();
  
  return results as Source[];
}

// Database operations for reports
export async function getLatestReport(db: DB): Promise<Report | null> {
  const result = await db
    .prepare('SELECT * FROM reports ORDER BY date DESC LIMIT 1')
    .first();
  
  return result as Report | null;
}

export async function getReportByDate(db: DB, date: string): Promise<Report | null> {
  const result = await db
    .prepare('SELECT * FROM reports WHERE date = ? LIMIT 1')
    .bind(date)
    .first();
  
  return result as Report | null;
}

export async function getAllReportDates(db: DB): Promise<{date: string}[]> {
  const { results } = await db
    .prepare('SELECT date FROM reports ORDER BY date DESC')
    .all();
  
  return results as {date: string}[];
}
