import React from 'react';
import { SocialCarousel } from '@/components/social-carousel';

export const Contact = () => {
  return (
    <div className="w-full max-w-7xl mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-primary">Conecte-se Comigo</h2>
      <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80 mb-12">
        Vamos construir algo incrível juntos. Entre em contato através das minhas redes.
      </p>
      <SocialCarousel />
    </div>
  );
};
