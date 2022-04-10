import { useSelector } from "react-redux"
import { GridWrapper } from "./styled";
import Field from "./Field";
import { selectDifficultyLevel, selectGrid } from "../minesweeperSlice";

const Grid = () => {
    const grid = useSelector(selectGrid);
    const difficultyLevel = useSelector(selectDifficultyLevel);

    return (
        <GridWrapper difficultyLevel={difficultyLevel}>
            {grid.map(gridField =>
            (<Field
                key={gridField.id}
                id={gridField.id}
                mine={gridField.mine}
                coordinates={gridField.coordinates}
                surroundingMines={gridField.surroundingMines}
                revealed={gridField.revealed}
                markedAsMine={gridField.markedAsMine}
                markedAsQuestion={gridField.markedAsQuestion}
            />))}
        </GridWrapper>
    );
};

export default Grid;