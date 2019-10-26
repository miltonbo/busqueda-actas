// Saga
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'

// Actions
import {
    SEARCH_MOVIES,
} from 'Actions/types'
import {
    searchMoviesResponse,
} from 'Actions'

// Utilities
import api from 'Api'


const searchMoviesRequest = async (keyword, errorResult) => {
    const movies = [];
    const begin = keyword;
    for (let index = begin; index <  begin + 20; index++) {
        movies.push(index);
    }
    return { movies, code: 'ok', message: null };
}

function* searchMoviesProcess({ payload }) {
    let result = null
    let errorResult = {code : 'error', message : 'Problems searching information, please retry or contact the administrator.' }
    try {
        const { keyword } = payload
        result = yield call(searchMoviesRequest, parseInt(keyword), errorResult)
    } catch (error) {
        console.log("Something wrong happened", error);
    }
    yield put(searchMoviesResponse(result))
}

export function* searchMoviesExported() {
    yield takeEvery(SEARCH_MOVIES, searchMoviesProcess)
}

export default function* rootSaga() {
    yield all([
        fork(searchMoviesExported),
    ])
}