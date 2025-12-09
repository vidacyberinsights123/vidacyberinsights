import React from 'react';

export const Card = ({ title, children, className = '' }: { title: string; children: React.ReactNode; className?: string }) => {
    return (
        <div className={`glass-card hover:shadow-neon-hover rounded-xl p-8 ${className}`}>
            <h3 className="text-xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                {title}
            </h3>
            <div className="text-slate-300 leading-relaxed">
                {children}
            </div>
        </div>
    );
};
