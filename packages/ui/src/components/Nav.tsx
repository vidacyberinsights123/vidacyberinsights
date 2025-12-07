import React from 'react';
import Link from 'next/link'; // Assuming Next.js context or generic anchor if not

export const Nav = ({ items }: { items: { label: string; href: string }[] }) => {
    return (
        <nav className="flex space-x-6 p-4 bg-white border-b border-gray-100">
            {items.map((item) => (
                <a key={item.href} href={item.href} className="text-gray-600 hover:text-blue-600 font-medium">
                    {item.label}
                </a>
            ))}
        </nav>
    );
};
