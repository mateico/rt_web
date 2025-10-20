'use client';

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary';
};

export default function Button({
                                   variant = 'primary',
                                   className = '',
                                   children,
                                   ...props
                               }: ButtonProps) {
    const base =
        "inline-flex items-center justify-center rounded-md font-semibold transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed px-6 py-2 text-m";

    const variants = {
        primary:
            "bg-primary-800 text-white hover:bg-primary-900 active:bg-primary-950 focus:ring-primary-600 hover:scale-110 hover:shadow-lg active:scale-95",
        secondary:
            "bg-secondary-500 text-primary-800 hover:bg-secondary-600 active:bg-secondary-700 focus:ring-secondary-400 hover:scale-110 hover:shadow-lg active:scale-95",
    };

    return (
        <button
            {...props}
            className={`${base} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}
