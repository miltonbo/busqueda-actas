import {
    SEARCH_MOVIES,
    SEARCH_MOVIES_RESPONSE,
    OBTENER_DATOS_MESA_ACTA,
    OBTENER_DATOS_MESA_ACTA_RESPONSE
} from './types'


export const searchMovies = (keyword) => ({
    type: SEARCH_MOVIES,
    payload: { keyword }
})

export const searchMoviesResponse = (response) => ({
    type: SEARCH_MOVIES_RESPONSE,
    payload: { response }
})

export const obtenerDatosMesaActa = (acta) => ({
    type: OBTENER_DATOS_MESA_ACTA,
    payload: { acta }
})

export const obtenerDatosMesaActaResponse = (response) => ({
    type: OBTENER_DATOS_MESA_ACTA_RESPONSE,
    payload: { response }
})