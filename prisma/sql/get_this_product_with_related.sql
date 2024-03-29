--SELECT * FROM get_this_product_with_related(1, 5);
DROP FUNCTION IF EXISTS get_this_product_with_related(INT8, INT);

CREATE OR REPLACE FUNCTION get_this_product_with_related(
    product_id INT8,
    related_limit INT
)
RETURNS TABLE(
    id INT8,
    title TEXT,
    price FLOAT4,
    stock_quantity INT2,
    images VARCHAR[],
    description VARCHAR,
    characteristics VARCHAR[],
    brand_name TEXT,
    category_name TEXT,
    maintenance_cost FLOAT4,
    installation_cost FLOAT4
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        p.id,
        p.title,
        p.price,
        p.stock_quantity,
        p.images,
        p.description,
        p.characteristics,
        p.maintenance_cost,
        p.installation_cost,
        b.name AS brand_name,
        c.name AS category_name
    FROM products p
    INNER JOIN brands b ON p.brand_id = b.id
    INNER JOIN categories c ON p.category_id = c.id
    WHERE p.id = product_id

    UNION ALL

    SELECT
        p.id,
        p.title,
        p.price,
        p.stock_quantity,
        p.images,
        p.description,
        p.characteristics,
        p.maintenance_cost,
        p.installation_cost,
        b.name AS brand_name,
        c.name AS category_name
    FROM products p
    INNER JOIN brands b ON p.brand_id = b.id
    INNER JOIN categories c ON p.category_id = c.id
    WHERE p.category_id = (SELECT category_id FROM products WHERE id = product_id)
      AND p.id != product_id
    LIMIT related_limit;
END;
$$ LANGUAGE plpgsql;
