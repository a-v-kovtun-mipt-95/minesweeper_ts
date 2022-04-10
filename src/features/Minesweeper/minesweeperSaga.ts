import { takeEvery, call, select, all, put, actionChannel, take } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga'
import { saveScoreBoardInLocalStorage } from './minesweeperLocalStorage';
import { 
    selectBestTimes, 
    setBestTime, 
    leftClick, 
    selectGrid,
    newGameButtonClick, 
    selectDifficultyLevel,
    setNewDifficultyLevel,
    updateGrid,
    gameStatus,
} from './minesweeperSlice';

const OPEN_WS = 'OPEN_WS';
const REQUEST_WS = 'REQUEST_WS';
const MESSAGE_WS = 'MESSAGE_WS';
const ERROR_WS = 'ERROR_WS';

let socket;

function wsInitChannel() {
    socket = new WebSocket("wss://hometask.eg1236.com/game1/");
    return eventChannel((emitter) => {
        socket.onopen = (event) => emitter({ type: OPEN_WS });
        socket.onmessage = (event) => emitter({ type: MESSAGE_WS, payload: event.data });
        socket.onerror = (error) => emitter({ type: ERROR_WS, payload: error.message });
        socket.onclose = (event) => emitter(END);
        return () => socket.close();
    });
}

function* wsSaga() {
    const channel = yield call(wsInitChannel)
    while (true) {
      const action = yield take(channel)
      yield put(action)
    }
}

function* wsOpenHandler() {
    const difficultyLevel = yield select(selectDifficultyLevel);
    yield put({ type: REQUEST_WS, payload: `new ${difficultyLevel}`});
}

function* wsOpenSaga() {
    yield takeEvery(OPEN_WS, wsOpenHandler);
}

function* wsMessageHandler(action) {
    const message = action.payload;
    yield console.log(`socket.onmessage: ${message}`);
    if(message.startsWith('new:')) {
        if(message.includes('OK')) {
            yield put({ type: REQUEST_WS, payload: 'map'});
        }
    }
    if(message.startsWith('map:')) {
        yield put(updateGrid(message));
    }
    if(message.startsWith('open:')) {
        if(message.includes('win')) {
            yield put(gameStatus('won'));
        }
        if(message.includes('lose')) {
            yield put(gameStatus('lost'));
        }
        yield put({ type: REQUEST_WS, payload: 'map'});
    }
}

function* wsMessageSaga() {
    yield takeEvery(MESSAGE_WS, wsMessageHandler);
}

function* wsErrorHandler(action) {
    yield console.log(`socket.onerror error=${action.payload}`);
}

function* wsErrorSaga() {
    yield takeEvery(ERROR_WS, wsErrorHandler);
}

function* saveScoreBoardInLocalStorageHandler() {
    const bestTimes = yield select(selectBestTimes);
    yield call(saveScoreBoardInLocalStorage, bestTimes);
}

function* setBestTimeSaga() {
    yield takeEvery(setBestTime, saveScoreBoardInLocalStorageHandler);
}

function* leftClickHandler(action) {
    const grid = yield select(selectGrid);
    const index = grid.findIndex(field => field.id === action.payload);
    const row = grid[index].coordinates.row;
    const column = grid[index].coordinates.column;
    yield console.log(`leftClick ${row} ${column}`);
    yield put({ type: REQUEST_WS, payload: `open ${column-1} ${row-1}`});
}

function* leftClickSaga() {
    yield takeEvery(leftClick, leftClickHandler);
}

function* newGameButtonClickHandler() {
    const difficultyLevel = yield select(selectDifficultyLevel);
    yield console.log(`newGameButtonClick ${difficultyLevel}`);
    yield put({ type: REQUEST_WS, payload: `new ${difficultyLevel}`});
    yield put({ type: REQUEST_WS, payload: 'map'});
}

function* newGameButtonClickSaga() {
    yield takeEvery(newGameButtonClick, newGameButtonClickHandler);
}

function* setNewDifficultyLevelHandler(action) {
    const difficultyLevel = action.payload;
    yield console.log(`setNewDifficultyLevel ${difficultyLevel}`);
    yield put({ type: REQUEST_WS, payload: `new ${difficultyLevel}`});
    yield put({ type: REQUEST_WS, payload: 'map'});
}

function* setNewDifficultyLevelSaga() {
    yield takeEvery(setNewDifficultyLevel, setNewDifficultyLevelHandler);
}

function* requestHandler(payload) {
    yield socket.send(payload);
    yield console.log(`socket.send ${payload}`);
}

function* watchRequestsSaga() {
    const requestChan = yield actionChannel(REQUEST_WS);
    while (true) {
      const {payload} = yield take(requestChan);
      yield call(requestHandler, payload);
    }
  }

export function* minesweeperSaga() {
    yield all([
        setBestTimeSaga(),
        leftClickSaga(),
        newGameButtonClickSaga(),
        setNewDifficultyLevelSaga(),
        watchRequestsSaga(),
        wsSaga(),
        wsOpenSaga(),
        wsMessageSaga(),
        wsErrorSaga(),
    ]);
}