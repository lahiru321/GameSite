-- Create contacts table for storing messages from the contact form
CREATE TABLE IF NOT EXISTS contacts (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Example insert
INSERT INTO contacts (name, email, message, status) VALUES
('Jane Doe', 'jane@example.com', 'Hi, I have a question about refunds.', 'new');

-- Quick verify
SELECT id, name, email, message, status, created_at FROM contacts ORDER BY id DESC;
