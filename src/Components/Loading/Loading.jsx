'use client'

import { useEffect, useState } from 'react'

export default function Loading() {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        // Simular un tiempo de carga mínimo
        const timer = setTimeout(() => {
            setIsVisible(false)
        }, 2200)

        return () => clearTimeout(timer)
    }, [])

    if (!isVisible) return null

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#051B2C] z-50">
            {/* Logo Text */}
            <h1 className="text-6xl md:text-8xl font-black text-white mb-12 font-hammersmith">
                LUCAMO
            </h1>

            {/* Progress bar container */}
            <div className="w-64 md:w-96 h-1 bg-white/20 rounded-full overflow-hidden">
                {/* Animated progress line */}
                <div className="h-full bg-white rounded-full animate-loading-bar" />
            </div>

            {/* Loading text */}
            <p className="mt-4 text-white text-lg font-medium">
                Cargando...
            </p>
        </div>
    )
}
