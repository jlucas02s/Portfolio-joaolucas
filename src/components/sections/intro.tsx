"use client";

import React, { useState, useEffect, useRef } from 'react';
import { MoveDown } from 'lucide-react';

export const Intro = () => {
    const [isClient, setIsClient] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsClient(true);
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { offsetWidth, offsetHeight } = container;
            const x = (clientX / offsetWidth) - 0.5;
            const y = (clientY / offsetHeight) - 0.5;

            const rotateX = -y * 30;
            const rotateY = x * 30;

            container.style.setProperty('--rotate-x', `${rotateX}deg`);
            container.style.setProperty('--rotate-y', `${rotateY}deg`);

            const bgX = 50 + x * 20;
            const bgY = 50 + y * 20;
            container.style.setProperty('--bg-x', `${bgX}%`);
            container.style.setProperty('--bg-y', `${bgY}%`);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    if (!isClient) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center text-center">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase">
                     <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-accent">
                        João Lucas
                    </span>
                </h1>
                <p className="mt-4 text-xl md:text-2xl text-foreground/70">Desenvolvedor & Criativo Digital</p>
            </div>
        )
    }

    return (
        <div 
            ref={containerRef}
            className="w-full h-full flex flex-col items-center justify-center text-center relative pointer-events-auto"
            style={{ 
                perspective: '1000px',
                '--rotate-x': '0deg',
                '--rotate-y': '0deg',
                '--bg-x': '50%',
                '--bg-y': '50%',
            } as React.CSSProperties}
        >
             <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background -z-10 transition-all duration-300 ease-out" style={{ 
                 backgroundPosition: 'var(--bg-x) var(--bg-y)',
                 backgroundSize: '200% 200%' 
            }}></div>
            <h1 
                className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase transition-transform duration-300 ease-out"
                style={{ transform: 'rotateX(var(--rotate-x)) rotateY(var(--rotate-y))' }}
            >
                <span 
                    className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-accent relative"
                    style={{ textShadow: '0 2px 20px hsla(var(--primary)/0.5)' }}
                >
                    João Lucas
                     <span 
                        aria-hidden="true" 
                        className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-br from-primary to-accent opacity-30" 
                        style={{ transform: 'translateY(0.75em) scaleY(-1)', filter: 'blur(10px)' }}
                    >
                        João Lucas
                    </span>
                </span>
            </h1>
            <p 
                className="mt-4 text-xl md:text-2xl text-foreground/70 transition-transform duration-300 ease-out"
                style={{ transform: 'rotateX(var(--rotate-x)) rotateY(var(--rotate-y))' }}
            >
                Desenvolvedor & Criativo Digital
            </p>
            <div className="absolute bottom-10 flex flex-col items-center gap-2 text-foreground/60 animate-bounce pointer-events-none">
                <span className="text-sm">Role para explorar</span>
                <MoveDown className="w-5 h-5" />
            </div>
        </div>
    );
};
