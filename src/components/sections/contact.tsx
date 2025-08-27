import React from 'react';
import { SocialOrbit } from '@/components/social-orbit';

export const Contact = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-primary">Conecte-se Comigo</h2>
      <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80 mb-12">
        Vamos construir algo incrível juntos. Entre em contato através das minhas redes.
      </p>
      <SocialOrbit />
    </div>
  );
};
