import React from 'react';
import { SocialSpiral } from '@/components/social-spiral';

export const Contact = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-primary">Conecte-se Comigo</h2>
      <p className="text-lg md:text-xl max-w-2xl mx-auto text-foreground/80 mb-12">
        Vamos construir algo incrível juntos. Entre em contato através das minhas redes.
      </p>
      <SocialSpiral />
    </div>
  );
};
