--SELECT * FROM get_products_by_category(8, 4, null);
--SELECT * FROM get_products_by_category(3, 10, 10);

DROP FUNCTION get_products_by_category(integer,integer,bigint);
CREATE OR REPLACE FUNCTION get_products_by_category(
    page_offset INT,
    page_limit INT,
    input_category_id INT8 DEFAULT NULL
)
RETURNS TABLE(
    id INT8,
    title TEXT,
    price FLOAT4,
    price_old FLOAT4,
    promo_percentage INT2,
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
        p.price_old,
        p.promo_percentage,
        p.stock_quantity,
        p.images,
        p.description,
        p.characteristics,
        b.name AS brand_name,
        c.name AS category_name,
        p.maintenance_cost,
        p.installation_cost
    FROM products p
    INNER JOIN brands b ON p.brand_id = b.id
    INNER JOIN categories c ON p.category_id = c.id
    WHERE (input_category_id IS NULL OR p.category_id = input_category_id)
    ORDER BY p.id
    LIMIT page_limit OFFSET page_offset;
END;
$$ LANGUAGE plpgsql;
