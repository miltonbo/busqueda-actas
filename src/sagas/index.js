/**
 * Root Sagas
 */
import { all } from 'redux-saga/effects';

// sagas
import moviesSagas from './MoviesSaga';

export default function* rootSaga(getState) {
    yield all([
        moviesSagas(),
    ]);
}