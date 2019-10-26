// Saga
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'

// Actions
import {
    SEARCH_MOVIES,
    OBTENER_DATOS_MESA_ACTA,
} from 'Actions/types'
import {
    searchMoviesResponse,
    obtenerDatosMesaActaResponse,
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

// Obtener datos del Acta

const obtenerDatosMesaActaRequest = async (acta, errorResult) => {
    return await api.get('acta-oficial', {params: { acta } })
    .then((response) => (response.data))
    .catch(error => {
        console.error('Problems fetching information about movies', error)
        return errorResult
    })
}

function* obtenerDatosMesaActaProcess({ payload }) {
    let result = null
    let errorResult = {code : 'error', message : 'Problemas al obtener informacion' }
    try {
        const { acta } = payload
        result = yield call(obtenerDatosMesaActaRequest, parseInt(acta), errorResult)
    } catch (error) {
        console.log("Something wrong happened", error);
    }
    yield put(obtenerDatosMesaActaResponse({ acta: result.resulActa, code: 'ok' }))
}

export function* obtenerDatosMesaActaExported() {
    yield takeEvery(OBTENER_DATOS_MESA_ACTA, obtenerDatosMesaActaProcess)
}

export default function* rootSaga() {
    yield all([
        fork(searchMoviesExported),
        fork(obtenerDatosMesaActaExported),
    ])
}