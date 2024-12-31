import React from 'react'

export function Card({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={`rounded-xl lg:rounded-3xl border shadow-custom2 ${className}`} {...props}>{children}</div>
}

export function CardContent({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={`${className}`} {...props}>{children}</div>
}

