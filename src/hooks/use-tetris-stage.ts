"use client"

import { useState, useEffect } from 'react';
import { createStage } from '@/lib/tetris-helpers';
import type { Player } from './use-tetris-player';

export type StageCell = [string | number, string];
export type Stage = StageCell[][];

export const useStage = (player: Player, resetPlayer: () => void) => {
    const [stage, setStage] = useState(createStage());
    const [rowsCleared, setRowsCleared] = useState(0);

    useEffect(() => {
        setRowsCleared(0);
        const sweepRows = (newStage: Stage): Stage =>
            newStage.reduce((ack, row) => {
                if (row.findIndex(cell => cell[0] === 0) === -1) {
                    setRowsCleared(prev => prev + 1);
                    ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
                    return ack;
                }
                ack.push(row);
                return ack;
            }, [] as Stage);


        const updateStage = (prevStage: Stage): Stage => {
            // First flush the stage
            const newStage = prevStage.map(
                row => row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)) as StageCell[]
            );

            // Then draw the tetromino
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        if (newStage[y + player.pos.y] && newStage[y + player.pos.y][x + player.pos.x]) {
                            newStage[y + player.pos.y][x + player.pos.x] = [
                                value,
                                `${player.collided ? 'merged' : 'clear'}`,
                            ];
                        }
                    }
                });
            });
            // Then check if we collided
            if (player.collided) {
                resetPlayer();
                return sweepRows(newStage);
            }

            return newStage;
        };

        setStage(prev => updateStage(prev));

    }, [player, resetPlayer]);


    return { stage, setStage, rowsCleared };
};
