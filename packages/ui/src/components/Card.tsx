import React from 'react';

export const Card = ({ title, children }: any) => {
    return (
        <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <div>{children}</div>
        </div>
    );
};
