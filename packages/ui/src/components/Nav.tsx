import React from 'react';
import Link from 'next/link'; // Assuming Next.js context or generic anchor if not

export const Nav = ({ items }: { items: { label: string; href: string }[] }) => {
    return (
        <nav className="container mx-auto flex items-center justify-between p-4">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                VIDACYBER
            </div>
            <div className="flex space-x-8">
                {items.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm font-medium text-slate-300 hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_rgba(58,180,255,0.5)]"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
            <div className="hidden md:block">
                {/* Placeholder for future auth buttons */}
            </div>
        </nav>
    );
};
