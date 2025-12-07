import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), '../../content');

export async function getArticle(slug: string) {
    // In a real app, we'd scan all role folders or keep a map
    // For scaffold, we assume flat or specific structure.
    // We generated content in content/articles/*.json
    const filePath = path.join(CONTENT_DIR, 'articles', `${slug}.json`); // Note: slug might not match filename exactly in real world, but for seed we match
    // Wait, I named files like 'individual-phone-security.json'.
    // I need a map or directory scan.
    const files = fs.readdirSync(path.join(CONTENT_DIR, 'articles'));
    const file = files.find(f => {
        const content = JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, 'articles', f), 'utf8'));
        return content.slug === slug;
    });

    if (!file) return null;
    const data = JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, 'articles', file), 'utf8'));
    return data;
}

export async function getArticlesByRole(role: string) {
    const dir = path.join(CONTENT_DIR, 'articles');
    const files = fs.readdirSync(dir);
    const articles = files.map(file => {
        return JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
    }).filter(article => article.roleTags.includes(role));
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
