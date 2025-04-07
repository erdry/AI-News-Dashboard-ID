-- Initialize database for AI Indonesia News Web Application

-- Drop tables if they exist
DROP TABLE IF EXISTS news_items;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS sources;
DROP TABLE IF EXISTS reports;

-- Create categories table
CREATE TABLE categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create sources table
CREATE TABLE sources (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  category TEXT NOT NULL,
  language TEXT NOT NULL,
  search_path TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create news_items table
CREATE TABLE news_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  source_id INTEGER NOT NULL,
  category_id INTEGER NOT NULL,
  date TEXT NOT NULL,
  snippet TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (source_id) REFERENCES sources (id),
  FOREIGN KEY (category_id) REFERENCES categories (id)
);

-- Create reports table
CREATE TABLE reports (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default categories
INSERT INTO categories (name, description) VALUES 
('AI Applications', 'New AI applications, products, or services being developed or deployed in Indonesia'),
('AI Policy and Regulation', 'Regulatory developments, policy announcements, and government initiatives related to AI in Indonesia'),
('AI in Indonesian Industries', 'How AI is transforming specific industries in Indonesia'),
('AI Investment and Funding', 'Investments, funding rounds, and financial developments in Indonesia''s AI ecosystem'),
('AI Talent and Education', 'Developments in AI education, training, and talent market in Indonesia'),
('AI Infrastructure', 'Developments in the infrastructure supporting AI in Indonesia'),
('International AI Partnerships', 'International collaborations, partnerships, and foreign AI companies operating in Indonesia');

-- Insert sample news items for demonstration
INSERT INTO sources (name, url, category, language, search_path) VALUES
('Kompas Tekno', 'https://tekno.kompas.com/', 'Indonesian Tech News', 'Indonesian', '/search/ai'),
('Detik Inet', 'https://inet.detik.com/', 'Indonesian Tech News', 'Indonesian', '/indeks/keyword/artificial+intelligence'),
('The Jakarta Post Tech', 'https://www.thejakartapost.com/life/technology', 'Indonesian English News', 'English', '/search?q=artificial+intelligence');

-- Insert sample report
INSERT INTO reports (date, title, content) VALUES
('2025-04-05', 'AI Technology News Impact on Indonesian Market', 
'# AI Technology News Impact on Indonesian Market

Report Date: 2025-04-05

## Executive Summary

This report provides a comprehensive overview of the latest developments in AI technology that may directly impact the Indonesian market. The information has been collected from various reliable sources including Indonesian tech news websites, international sources with Indonesia coverage, government sources, tech companies, and research institutions.

## Key Highlights

* Indonesian startup launches AI-powered customer service platform with 95% accuracy in Bahasa Indonesia
* New AI translation tool now supports 10 Indonesian regional languages
* Indonesian Government announces comprehensive National AI Strategy
* AI adoption in Indonesian banking sector grows 40% in Q1 2025
* Foreign investment in Indonesian AI startups reaches $150 million in Q1 2025

*This is a sample report for demonstration purposes.*');
