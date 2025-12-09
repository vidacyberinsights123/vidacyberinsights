import React from 'react';

export function BlueprintArticle({ article }: any) {
    return (
        <article className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm">
            <header className="mb-8 border-b pb-8">
                <div className="flex gap-2 mb-4">
                    {(article.tags || article.roleTags || []).map((tag: string) => (
                        <span key={tag} className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <h1 className="text-4xl font-extrabold mb-4 text-slate-900">{article.title}</h1>
                <div className="flex items-center text-slate-500 text-sm gap-4">
                    <span>{article.readTimeMinutes} min read</span>
                    <time>{article.publishedDate}</time>
                </div>
            </header>

            <div className="prose prose-lg prose-slate max-w-none text-slate-800">
                {/* Render server-generated HTML to ensure server/client consistency */}
                <div dangerouslySetInnerHTML={{ __html: article.contentHtml || article.content }} />
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": article.title,
                        "description": article.summary,
                        "datePublished": article.publishedDate,
                        "author": {
                            "@type": "Person",
                            "name": article.authorId // Should map to name
                        }
                    })
                }}
            />
        </article>
    );
}
