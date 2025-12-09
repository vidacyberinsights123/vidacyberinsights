import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const CONTENT_DIR = path.join(process.cwd(), '../../content');

export async function getArticle(slug: string) {
    const articlesDir = path.join(CONTENT_DIR, 'articles');
    const files = fs.readdirSync(articlesDir);

    // Try to find matching MD file first
    const file = files.find(f => {
        if (f.endsWith('.md')) {
            const fileContent = fs.readFileSync(path.join(articlesDir, f), 'utf8');
            const { data } = matter(fileContent);
            return data.slug === slug;
        }
        if (f.endsWith('.json')) {
            try {
                const content = JSON.parse(fs.readFileSync(path.join(articlesDir, f), 'utf8'));
                return content.slug === slug;
            } catch (e) { return false; }
        }
        return false;
    });

    if (!file) return null;

    const filePath = path.join(articlesDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    if (file.endsWith('.md')) {
        const { data, content } = matter(fileContent);

        // Convert Markdown to HTML server-side to avoid hydration mismatches
        const processedContent = await remark()
            .use(html, { sanitize: false })
            .process(content);
        const contentHtml = processedContent.toString();

        return { ...data, contentHtml, type: 'markdown' };
    } else {
        return { ...JSON.parse(fileContent), type: 'json' };
    }
}

export async function getArticlesByRole(role: string) {
    // role usually comes in as "individual", "student", etc.
    // My articles use "Individuals", "Students" (Capitalized, plural).
    // We need to normalize.
    const normalizedRole = role.toLowerCase();

    const dir = path.join(CONTENT_DIR, 'articles');
    if (!fs.existsSync(dir)) return [];

    const files = fs.readdirSync(dir);

    // ONLY process .md files to avoid mixing old JSON content with new articles
    const articles = files
        .filter(file => file.endsWith('.md'))
        .map(file => {
            const filePath = path.join(dir, file);
            try {
                const fileContent = fs.readFileSync(filePath, 'utf8');
                const { data, content } = matter(fileContent);
                return { ...data, content, type: 'markdown' };
            } catch (e) {
                console.error(`Error parsing ${file}:`, e);
                return null;
            }
        })
        .filter(Boolean)
        .filter((article: any) => {
            // Check both 'persona' (my new format) and 'roleTags' (legacy format)
            // Fuzzy match: e.g. "Individuals" includes "individual"
            const persona = article.persona?.toLowerCase() || '';
            const roleTags = (article.roleTags || []).map((r: string) => r.toLowerCase());

            return persona.includes(normalizedRole) || roleTags.includes(normalizedRole);
        });

    return articles;
}

export async function getRoadmap(role: string) {
    // Finds roadmap for the role
    const dir = path.join(CONTENT_DIR, 'roadmaps');
    const files = fs.readdirSync(dir);
    const roadmap = files.map(file => JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8')))
        .find(r => r.role === role);
    return roadmap;
}
