import React from 'react';
import { Button } from '@/components/ui/button';

type StartButtonProps = {
    callback: () => void;
};

const StartButton: React.FC<StartButtonProps> = ({ callback }) => (
    <Button onClick={callback} className="w-full" variant="default">
        Start Game
    </Button>
);

export default StartButton;
