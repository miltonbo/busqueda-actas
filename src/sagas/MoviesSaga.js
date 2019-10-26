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
    return await api.get('search', {
        params: { keyword }
    })
    .then((response) => (response.data))
    .catch(error => {
        console.error('Problems fetching information about movies', error)
        return errorResult
    })
}

function* searchMoviesProcess({ payload }) {
    let result = null
    let errorResult = {code : 'error', message : 'Problems searching information, please retry or contact the administrator.' }
    try {
        const { keyword } = payload
        result = yield call(searchMoviesRequest, keyword, errorResult)
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