import React from 'react';
import { Card } from '@vidacyber/ui';

export function BlueprintRoleHub({ role, roadmap, articles }: any) {
    return (
        <div className="space-y-12">
            <section className="text-center space-y-4">
                <h1 className="text-4xl font-extrabold capitalize text-blue-900">{role} Security Hub</h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Tailored cybersecurity resources, roadmaps, and guides for {role}s.
                </p>
            </section>

            {roadmap && (
                <section>
                    <h2 className="text-2xl font-bold mb-6">Learning Roadmap</h2>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {roadmap.steps.map((step: any, idx: number) => (
                            <Card key={step.id} title={`${idx + 1}. ${step.title}`}>
                                <p className="text-sm text-slate-500 mb-2">{step.estimatedMinutes} mins</p>
                                <p>{step.description}</p>
                            </Card>
                        ))}
                    </div>
                </section>
            )}

            <section>
                <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {articles.map((article: any) => (
                        <div key={article.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-bold mb-2">
                                <a href={`/articles/${article.slug}`} className="hover:text-blue-600 focus:outline-none focus:underline">
                                    {article.title}
                                </a>
                            </h3>
                            <p className="text-slate-600 mb-4">{article.summary}</p>
                            <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                {article.readTimeMinutes} min read
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
