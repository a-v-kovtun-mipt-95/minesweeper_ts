import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setBestTime } from "../../minesweeperSlice";

const useTimer = (gameStatus) => {
    const [actualTime, setActualTime] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        const intervalId = setInterval(() => {
            gameStatus === "initial" && setActualTime(0);
            gameStatus === "gameIsOn" && setActualTime(previousActualTime => previousActualTime + 0.1);
        }, 100);
        gameStatus === "won" && dispatch(setBestTime(actualTime.toFixed(1)));
        return () => {
            clearInterval(intervalId);
        };
    }, [gameStatus]);

    return actualTime.toFixed(1);
};

export default useTimer;