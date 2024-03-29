CREATE TABLE orders (
  id SERIAL PRIMARY KEY, -- Auto-incrementing integer for unique ID
  phone_number TEXT,
  full_name TEXT,
  address TEXT,
  wilaya TEXT,
  payment_method TEXT,
  orders JSONB,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP -- Timestamp for creation
);