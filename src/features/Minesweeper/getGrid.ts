import { difficultyLevels } from "./consts";

const getGrid = (difficulty: string, id?: string) => {

    const grid = [];

    const difficultyLevelsIndex = difficultyLevels.findIndex(difficultyLevel => difficultyLevel.name === difficulty);
    const fieldsQuantity = difficultyLevels[difficultyLevelsIndex].fields;
    const columnsQuantity = difficultyLevels[difficultyLevelsIndex].columns;

    const initiateGrid = (id) => {
        for (var i = 0; i < fieldsQuantity; i++) {
            var column = (i === 0 ? 1 : (column === columnsQuantity ? 1 : column = column + 1));
            var row = (i === 0 ? 1 : (i % columnsQuantity === 0 ? row = row + 1 : row));

            if (id !== undefined) {
                grid.push(
                    {
                        id: i,
                        revealed: false,
                        mine: 0,
                        markedAsMine: false,
                        markedAsQuestion: false,
                        surroundingMines: 0,
                        coordinates:
                        {
                            column,
                            row,
                        }
                    }
                )
            } else {
                grid.push(
                    {
                        id: i,
                        markedAsMine: false,
                    },
                );
            };
        };
    };

    if (id === undefined) {
        initiateGrid(id);
    }
    else {
        initiateGrid(id);
    };

    return (grid);
};

export default getGrid;