import { useDispatch, useSelector } from "react-redux";
import {
    rightClick,
    leftClick,
    selectGameStatus,
    selectDifficultyLevel
} from "../../minesweeperSlice";
import { StyledField, MineIcon, FlagIcon, QuestionMark } from "./styled";

const Field = ({ id, mine, revealed, markedAsMine, markedAsQuestion, surroundingMines }) => {
    const dispatch = useDispatch();
    const gameStatus = useSelector(selectGameStatus);
    const difficultyLevel = useSelector(selectDifficultyLevel);

    const clickHandler = (event) => {
        if (event.type === 'click') {
            event.preventDefault();
            markedAsMine === false && dispatch(leftClick(id));
        } else if (event.type === 'contextmenu') {
            event.preventDefault();
            revealed === false && dispatch(rightClick(id));
        }
    };

    return (
        <StyledField
            mine={mine}
            revealed={revealed}
            lost={gameStatus === "lost"}
            won={gameStatus === "won"}
            difficultyLevel={difficultyLevel}
            surroundingMines={surroundingMines}
            onClick={gameStatus !== "lost" && gameStatus !== "won" ? clickHandler : undefined}
            onContextMenu={gameStatus !== "lost" && gameStatus !== "won" ? clickHandler : undefined}
        >
            {revealed && mine === false && (surroundingMines === 0 ? "" : surroundingMines)}
            {revealed && mine && <MineIcon alt="💣" />}
            {!revealed && markedAsMine && gameStatus === "gameIsOn" && <FlagIcon alt="🚩" />}
            {!revealed && markedAsQuestion && gameStatus === "gameIsOn" && <QuestionMark alt="❓" />}
        </StyledField>
    );
};

export default Field;