import { useSelector } from "react-redux"
import { selectDifficultyLevel } from "./minesweeperSlice";
import Grid from "./Grid"
import TopBar from "./TopBar";
import LowBar from "./LowBar";
import ScoreBoard from "./ScoreBoard";
import { Container, Wrapper } from "./styled";

const Minesweeper = () => {

    const difficultyLevel = useSelector(selectDifficultyLevel);

    return (
        <Container>
            <Wrapper difficultyLevel={difficultyLevel}>
                <TopBar />
                <Grid />
                <LowBar />
            </Wrapper >
            <ScoreBoard />
        </Container>
    );
};

export default Minesweeper;