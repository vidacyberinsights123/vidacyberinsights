import { BlueprintArticle } from '../../../components/BlueprintArticle';
import { getArticle } from '../../../lib/content';
import fs from 'fs';
import path from 'path';

// Note: generateStaticParams needs to read all articles to know slugs
export async function generateStaticParams() {
    // In a real app we'd read directory. For scaffold we just return [slug]
    // I'll scan the directory in this function to be correct.
    const CONTENT_DIR = path.join(process.cwd(), '../../content/articles');
    if (!fs.existsSync(CONTENT_DIR)) return [];
    const files = fs.readdirSync(CONTENT_DIR);
    const params = files.map(file => {
        const content = JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8'));
        return { slug: content.slug };
    });
    return params;
}

export default async function Page({ params }: { params: { slug: string } }) {
    const article = await getArticle(params.slug);
    if (!article) return <div>Article not found</div>;

    return <BlueprintArticle article={article} />;
}
