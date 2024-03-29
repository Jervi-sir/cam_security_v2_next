--SELECT * FROM insert_order(
--  '123-456-7890',
--  'John Doe',
--  '123 Main St',
--  'MyState',
--  'Credit Card',
--  '{"items": [{"name": "Product A", "quantity": 2}, {"name": "Product B", "quantity": 1}]}'
--);
CREATE OR REPLACE FUNCTION insert_order(
  phone_number TEXT,
  full_name TEXT,
  address TEXT,
  wilaya TEXT,
  payment_method TEXT,
  orders JSONB
) RETURNS INTEGER AS $$
DECLARE
  new_order_id INTEGER;
BEGIN
  INSERT INTO orders (phone_number, full_name, address, wilaya, payment_method, orders, created_at)
  VALUES (phone_number, full_name, address, wilaya, payment_method, orders, CURRENT_TIMESTAMP)
  RETURNING id INTO new_order_id; -- Store the ID in a variable

  RETURN new_order_id; -- Return the captured ID
END;
$$ LANGUAGE plpgsql;