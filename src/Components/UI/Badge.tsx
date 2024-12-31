import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'secondary' | 'destructive' | 'outline'
}

export function Badge({ 
            children, 
            className = '', 
            variant = 'default',
            ...props }: BadgeProps) 
    {

    const variantClasses = {
        default: '',
        secondary: '',
        destructive: 'bg-red-600 text-white hover:bg-red-400',
        outline: ''
    }

    return (
        <span 
        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs lg:text-2xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variantClasses[variant]} ${className}`}
        {...props}
        >
            {children}
        </span>
    )
}