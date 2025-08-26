import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type DisplayProps = {
  gameOver?: boolean;
  text: string;
  value: number;
};

const Display: React.FC<DisplayProps> = ({ gameOver, text, value }) => {
  return (
    <Card className={`w-full p-2 text-center ${gameOver ? 'text-red-500' : 'text-foreground'}`}>
      <CardHeader className="p-1">
        <CardTitle className="text-sm font-normal">{text}</CardTitle>
      </CardHeader>
      <CardContent className="p-1 text-lg font-bold">
        {value}
      </CardContent>
    </Card>
  );
};

export default Display;
