import { useDispatch, useSelector } from "react-redux";
import { LowBarWrapper, DifficultyLevelButton } from "./styled";
import { selectDifficultyLevel, setNewDifficultyLevel } from "../minesweeperSlice";
import { BEGINNER, EXPERT, INTERMEDIATE,  } from "../consts";

const LowBar = () => {
    const difficultyLevel = useSelector(selectDifficultyLevel);
    const dispatch = useDispatch();

    return (
        <LowBarWrapper>
            <DifficultyLevelButton
                buttonDifficultyLevel={BEGINNER}
                difficultyLevel={difficultyLevel}
                onClick={() => dispatch(setNewDifficultyLevel(BEGINNER))}
            >
                Beginner
            </DifficultyLevelButton>
            <DifficultyLevelButton
                buttonDifficultyLevel={INTERMEDIATE}
                difficultyLevel={difficultyLevel}
                onClick={() => dispatch(setNewDifficultyLevel(INTERMEDIATE))}
            >
                Intermediate
            </DifficultyLevelButton>
            <DifficultyLevelButton
                buttonDifficultyLevel={EXPERT}
                difficultyLevel={difficultyLevel}
                onClick={() => dispatch(setNewDifficultyLevel(EXPERT))}
            >
                Expert
            </DifficultyLevelButton>
        </LowBarWrapper >
    );
};

export default LowBar;