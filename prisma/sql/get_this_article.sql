--SELECT * FROM get_this_article(1);
DROP FUNCTION IF EXISTS get_this_article(INT4);

CREATE OR REPLACE FUNCTION get_this_article(article_id INT4)
RETURNS TABLE(
    id INT4,
    title TEXT,
    content TEXT,
    summary TEXT,
    images TEXT[],
    published_date TIMESTAMPTZ,
    last_modified_date TIMESTAMPTZ,
    category TEXT,
    status TEXT,
    tags TEXT[],  
    views INT4
) AS $$
BEGIN
    -- Increment the view count for the article
    UPDATE articles AS a
    SET views = a.views + 1
    WHERE a.id = article_id;

    -- Return the article information
    RETURN QUERY
    SELECT
        a.id,
        a.title,
        a.content,
        a.summary,
        a.images,
        a.published_date,
        a.last_modified_date,
        a.category,
        a.status,
        a.tags,
        a.views
    FROM articles AS a
    WHERE a.id = article_id;
END;
$$ LANGUAGE plpgsql;
