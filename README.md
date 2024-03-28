
## Getting Started

https://www.npmjs.com/package/react-awesome-reveal
https://www.npmjs.com/package/react-animate-on-scroll

https://stackoverflow.com/questions/74580728/get-url-params-next-js-13
https://www.youtube.com/watch?v=zPyACEvZvOA

https://iconscout.com/illustrations/safe-box
https://www.youtube.com/watch?v=-_bhH4MLq1Y

https://quiz.simplisafe.com/kaedkhe4?L=Full+Page&uid=&deferred=true&wizardType=embedded&uid=d70b0331-62c9-4d8c-92fb-1934a57e3a4f

## Templates 

- Theme  - [OnSafe](https://themeforest.net/item/onsafe-cctv-security-html-template/42659812)
- Dashboard - [Shadcn Next](https://github.com/Kiranism/next-shadcn-dashboard-starter)


## Query Supabase

```
CREATE OR REPLACE FUNCTION get_random_products(limit_count INT)
RETURNS TABLE(
    id INT8,
    title TEXT,
    price FLOAT4,
    quantity INT2,
    images VARCHAR[],
    description VARCHAR,
    characteristics VARCHAR[],
    brand_name TEXT,
    category_name TEXT
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        p.id,
        p.title,
        p.price,
        p.quantity,
        p.images,
        p.description,
        p.characteristics,
        b.name AS brand_name,
        c.name AS category_name
    FROM products p
    INNER JOIN brands b ON p.brand_id = b.id
    INNER JOIN categories c ON p.category_id = c.id
    ORDER BY RANDOM()
    LIMIT limit_count;
END;
$$ LANGUAGE plpgsql;
```
```
SELECT * from get_random_products(5);
```