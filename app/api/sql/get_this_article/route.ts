import { PrismaClient } from '@prisma/client';
import type { Request } from 'express'; // Assuming you're using Express.js types

const prisma = new PrismaClient();

export async function POST(req: Request) {
    // Your SQL query
    const sql = `
        DROP FUNCTION IF EXISTS get_this_article(INT);
        CREATE FUNCTION get_this_article(article_id INT) RETURNS TABLE (
            id INT,
            title TEXT,
            content TEXT,
            summary TEXT,
            images TEXT[],
            published_date TIMESTAMPTZ,
            last_modified_date TIMESTAMPTZ,
            category TEXT,
            status TEXT,
            tags TEXT[],  
            views INT
        ) AS $$
        BEGIN
            UPDATE articles SET views = views + 1 WHERE id = article_id;
            RETURN QUERY SELECT * FROM articles WHERE id = article_id;
        END;
        $$ LANGUAGE plpgsql;
    `;

    try {
        await prisma.$executeRawUnsafe(sql);
        return {
            status: 200,
            body: {
                message: 'Function created successfully'
            }
        };
    } catch (error) {
        console.error('Error executing SQL:', error);
        return {
            status: 500,
            body: {
                error: 'Error executing SQL'
            }
        };
    }
}
