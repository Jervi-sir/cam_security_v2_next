--SELECT * FROM get_random_articles(2);
CREATE OR REPLACE FUNCTION get_random_articles(limit_count INT)
RETURNS SETOF articles AS $$
BEGIN
    RETURN QUERY
    SELECT * FROM articles
    ORDER BY RANDOM()
    LIMIT limit_count;
END;
$$ LANGUAGE plpgsql;