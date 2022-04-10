import { createSlice } from "@reduxjs/toolkit";
import { BEGINNER, INTERMEDIATE, EXPERT } from "./consts";
import getGrid from "./getGrid";
import { getScoreBoardFromLocalStorage } from "./minesweeperLocalStorage";

const minesweeperSlice = createSlice(
    {
        name: 'minesweeper',
        initialState: {
            difficultyLevel: BEGINNER,
            grid: getGrid(BEGINNER),
            gameStatus: "initial",
            bestTimes: getScoreBoardFromLocalStorage(),
        },

        reducers: {
            leftClick: (state, { payload: id }) => {
                state.gameStatus === "initial" && (state.grid = getGrid(state.difficultyLevel, id));
                state.gameStatus === "initial" && (state.gameStatus = "gameIsOn");
            },
            newGameButtonClick: (state) => {
                state.gameStatus = "initial";
                state.grid = getGrid(state.difficultyLevel);
            },
            setNewDifficultyLevel: (state, { payload }) => {
                state.gameStatus = "initial";
                state.difficultyLevel = payload;
                state.grid = getGrid(state.difficultyLevel);
            },
            rightClick: (state, { payload: id }) => {
                const index = state.grid.findIndex(field => field.id === id);

                if (state.grid[index].markedAsMine === false && state.grid[index].markedAsQuestion === false) {
                    state.grid[index].markedAsMine = true;
                } else if (state.grid[index].markedAsMine === true && state.grid[index].markedAsQuestion === false) {
                    state.grid[index].markedAsMine = false;
                    state.grid[index].markedAsQuestion = true;
                } else if (state.grid[index].markedAsMine === false && state.grid[index].markedAsQuestion === true) {
                    state.grid[index].markedAsMine = false;
                    state.grid[index].markedAsQuestion = false;
                };
            },
            setBestTime: (state, { payload }) => {
                switch (state.difficultyLevel) {
                    case BEGINNER:
                        state.bestTimes.beginner.push(payload);
                        state.bestTimes.beginner.sort((a: number, b: number) => a - b);
                        state.bestTimes.beginner.length > 5 && state.bestTimes.beginner.pop();
                        break;
                    case INTERMEDIATE:
                        state.bestTimes.intermediate.push(payload);
                        state.bestTimes.intermediate.sort((a: number, b: number) => a - b);
                        state.bestTimes.intermediate.length > 5 && state.bestTimes.intermediate.pop();
                        break;
                    case EXPERT:
                        state.bestTimes.expert.push(payload);
                        state.bestTimes.expert.sort((a: number, b: number) => a - b);
                        state.bestTimes.expert.length > 5 && state.bestTimes.expert.pop();
                        break;
                };
            },
            gameStatus: (state, { payload }) => {
                state.gameStatus = payload;
            },
            updateGrid: (state, { payload }) => {
                const cellStatus = payload.split('').filter((chr: string,inx: number) => inx > 4 && chr.charCodeAt(0)!==10);
                for(let i = 0; i < cellStatus.length; i++) {
                    if(cellStatus[i] === '*') {
                        state.grid[i].mine = true;
                        state.grid[i].revealed = true;
                    } else {
                        if(cellStatus[i] < 9) {
                            state.grid[i].surroundingMines = parseInt(cellStatus[i]);
                            state.grid[i].revealed = true;
                            state.grid[i].mine = false;
                        }
                    }
                }
            },
        },
    });

export const {
    newGameButtonClick,
    setNewDifficultyLevel,
    rightClick,
    leftClick,
    setBestTime,
    updateGrid,
    gameStatus,
} = minesweeperSlice.actions;
export const selectGrid = (state: { minesweeper: { grid: any; }; }) => state.minesweeper.grid;
export const selectDifficultyLevel = (state: { minesweeper: { difficultyLevel: any; }; }) => state.minesweeper.difficultyLevel;
export const selectGameStatus = (state: { minesweeper: { gameStatus: any; }; }) => state.minesweeper.gameStatus;
export const selectBestTimes = (state: { minesweeper: { bestTimes: any; }; }) => state.minesweeper.bestTimes;
export const selectBestTime = (state: { minesweeper: { difficultyLevel: any; bestTimes: { beginner: any; intermediate: any; expert: any; }; }; }) => {
    switch (state.minesweeper.difficultyLevel) {
        case BEGINNER:
            return state.minesweeper.bestTimes.beginner;
        case INTERMEDIATE:
            return state.minesweeper.bestTimes.intermediate;
        default:
            return state.minesweeper.bestTimes.expert;
    };
};

export default minesweeperSlice.reducer;