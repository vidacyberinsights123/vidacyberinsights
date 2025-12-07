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
        <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
            <header>
                <Nav items={navItems} />
            </header>
            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>
            <footer className="bg-slate-900 text-slate-400 p-8 mt-12">
                <div className="container mx-auto">
                    <p>&copy; {new Date().getFullYear()} Vidacyberinsights. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
