import React from 'react';

export const SectionHeader = ({ title, subtitle, align = 'center' }: { title: string; subtitle?: string; align?: 'left' | 'center' }) => {
    return (
        <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-slide-up">
                {title}
                <span className="block h-1 w-20 bg-gradient-to-r from-primary to-accent mt-4 rounded-full mx-auto opacity-80" style={{ display: align === 'center' ? 'block' : 'none' }}></span>
            </h2>
            {subtitle && (
                <p className="text-slate-400 text-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};
