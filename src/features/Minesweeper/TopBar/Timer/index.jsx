import { useSelector } from "react-redux";
import { selectGameStatus } from "../../minesweeperSlice";
import useTimer from "./useTimer";
import { TimerWrapper, TimerIcon } from "./styled";

const Timer = () => {
    const gameStatus = useSelector(selectGameStatus);

    return (
        <TimerWrapper>
            <TimerIcon alt="⏲️" />: {useTimer(gameStatus)}
        </TimerWrapper>
    );
};

export default Timer;