"use client"

import React from 'react';

import { createStage, checkCollision } from '@/lib/tetris-helpers';

// Custom Hooks
import { useInterval } from '@/hooks/use-interval';
import { usePlayer } from '@/hooks/use-tetris-player';
import { useStage } from '@/hooks/use-tetris-stage';
import { useGameStatus } from '@/hooks/use-tetris-game-status';

// Components
import Stage from './stage';
import Display from './display';
import StartButton from './start-button';

export const TetrisGame = () => {
    const [dropTime, setDropTime] = React.useState<number | null>(null);
    const [gameOver, setGameOver] = React.useState(false);

    const { player, updatePlayerPos, resetPlayer, playerRotate } = usePlayer();
    const { stage, setStage, rowsCleared } = useStage(player, resetPlayer);
    const { score, setScore, rows, setRows, level, setLevel } = useGameStatus(rowsCleared);
    
    const movePlayer = (dir: -1 | 1) => {
        if (!checkCollision(player, stage, { x: dir, y: 0 })) {
            updatePlayerPos({ x: dir, y: 0, collided: false });
        }
    };

    const startGame = () => {
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        setGameOver(false);
        setScore(0);
        setRows(0);
        setLevel(0);
    };

    const drop = () => {
        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1);
            setDropTime(1000 / (level + 1) + 200);
        }

        if (!checkCollision(player, stage, { x: 0, y: 1 })) {
            updatePlayerPos({ x: 0, y: 1, collided: false });
        } else {
            if (player.pos.y < 1) {
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPos({ x: 0, y: 0, collided: true });
        }
    };

    const keyUp = ({ keyCode }: { keyCode: number }): void => {
        if (!gameOver) {
            if (keyCode === 40) { // down arrow
                setDropTime(1000 / (level + 1) + 200);
            }
        }
    };

    const dropPlayer = () => {
        setDropTime(null);
        drop();
    };

    const move = ({ keyCode }: { keyCode: number }): void => {
        if (!gameOver) {
            if (keyCode === 37) { // left arrow
                movePlayer(-1);
            } else if (keyCode === 39) { // right arrow
                movePlayer(1);
            } else if (keyCode === 40) { // down arrow
                dropPlayer();
            } else if (keyCode === 38) { // up arrow
                playerRotate(stage, 1);
            }
        }
    };

    useInterval(() => {
        drop();
    }, dropTime);

    return (
        <div 
            className="w-full h-full flex items-center justify-center bg-background/50 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-primary/20"
            role="button" 
            tabIndex={0} 
            onKeyDown={e => move(e)}
            onKeyUp={keyUp}
        >
            <div className="flex gap-8">
                <Stage stage={stage} />
                <aside className="w-48 flex flex-col gap-4">
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over" value={score} />
                    ) : (
                        <div className="flex flex-col gap-4">
                            <Display text="Score" value={score} />
                            <Display text="Rows" value={rows} />
                            <Display text="Level" value={level} />
                        </div>
                    )}
                    <StartButton callback={startGame} />
                </aside>
            </div>
        </div>
    );
};
