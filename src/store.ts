import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import minesweeperReducer from './features/Minesweeper/minesweeperSlice';
import { minesweeperSaga } from './features/Minesweeper/minesweeperSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        minesweeper: minesweeperReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(minesweeperSaga);

export default store;