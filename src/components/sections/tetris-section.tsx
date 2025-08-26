import React from 'react';
import { TetrisGame } from '@/components/tetris';

export const TetrisSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-6xl font-bold mb-2 text-primary">Hora do Jogo!</h2>
        <p className="text-lg text-foreground/80">
          Que tal uma partida de Tetris? Use as setas para jogar.
        </p>
      </div>
      <TetrisGame />
    </div>
  );
};
