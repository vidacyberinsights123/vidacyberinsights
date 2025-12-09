import React from 'react';
import { Nav } from '@vidacyber/ui';

export function BlueprintSite({ children }: { children: React.ReactNode }) {
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Individuals', href: '/individual' },
        { label: 'Students', href: '/student' },
        { label: 'Parents', href: '/parent' },
        { label: 'SMBs', href: '/smb' },
        { label: 'Educators', href: '/educator' },
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans text-white bg-transparent">
            {/* Sticky Glass Header */}
            <header className="sticky top-0 z-50 w-full glass border-b border-white/10">
                <Nav items={navItems} />
            </header>

            <main className="flex-grow">
                {children}
            </main>

            <footer className="bg-slate-900/80 backdrop-blur border-t border-white/10 text-slate-400 p-8 mt-12 relative z-10">
                <div className="container mx-auto">
                    <p>&copy; {new Date().getFullYear()} Vidacyberinsights. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
