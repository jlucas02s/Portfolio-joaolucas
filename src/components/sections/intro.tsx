import React from 'react';
import { MoveDown } from 'lucide-react';

export const Intro = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center relative">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background -z-10 animate-[gradient-animation_15s_ease_infinite]" style={{ backgroundSize: '200% 200%' }}></div>
             <style jsx>{`
                @keyframes gradient-animation {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase">
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-accent">
                    João Lucas
                </span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-foreground/70">Desenvolvedor & Criativo Digital</p>
            <div className="absolute bottom-10 flex flex-col items-center gap-2 text-foreground/60 animate-bounce">
                <span className="text-sm">Role para explorar</span>
                <MoveDown className="w-5 h-5" />
            </div>
        </div>
    );
};
