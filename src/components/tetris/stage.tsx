import React from 'react';
import Cell from './cell';
import { STAGE_WIDTH } from '@/lib/tetris-helpers';
import type { Stage as StageType } from '@/hooks/use-tetris-stage';

type StageProps = {
  stage: StageType;
};

const Stage: React.FC<StageProps> = ({ stage }) => (
  <div 
    className="grid border-2 border-primary/50 bg-black/50"
    style={{
      gridTemplateRows: `repeat(${stage.length}, 1fr)`,
      gridTemplateColumns: `repeat(${stage[0].length}, 1fr)`,
      width: '100%',
      maxWidth: '25vw',
    }}
  >
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </div>
);

export default Stage;
