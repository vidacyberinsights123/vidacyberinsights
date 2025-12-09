import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
}

export const Button = ({ children, onClick, variant = 'primary', className = '' }: ButtonProps & { className?: string }) => {
    const baseStyle = "px-6 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center transform active:scale-95";

    const variants: Record<string, string> = {
        primary: "bg-gradient-to-r from-primary to-accent text-white shadow-neon hover:shadow-neon-hover hover:-translate-y-0.5 border border-transparent",
        glass: "bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white/20 hover:shadow-glass hover:-translate-y-0.5",
        outline: "bg-transparent text-primary border border-primary/50 hover:bg-primary/10 hover:border-primary shadow-[0_0_10px_rgba(58,180,255,0.1)] hover:shadow-[0_0_15px_rgba(58,180,255,0.3)]",
        secondary: "bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700"
    };

    return (
        <button
            className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
