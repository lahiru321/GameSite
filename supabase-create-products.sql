-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image TEXT,
  platform TEXT,
  category TEXT,
  price INTEGER NOT NULL DEFAULT 1, -- price in USD (1,2,3)
  status TEXT NOT NULL DEFAULT 'active', -- e.g. 'active', 'available', 'inactive'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Sample data
INSERT INTO products (title, description, image, platform, category, price, status) VALUES
('Cyberpunk 2077', 'Futuristic open-world RPG', '/cyberpunk-game-cover.jpg', 'Steam', 'Action RPG', 1, 'active'),
('Elden Ring', 'Open-world action RPG by FromSoftware', '/elden-ring-game-cover.jpg', 'PlayStation', 'RPG', 2, 'active'),
('Baldur''s Gate 3', 'Classic-style CRPG', '/baldurs-gate-3-game-cover.jpg', 'PC', 'RPG', 3, 'available'),
('Coming Soon Game', 'Not yet released', '/placeholder.svg', 'PC', 'Adventure', 2, 'inactive');

-- Select statement
SELECT id, title, image, description, platform, category, price, status FROM products;
