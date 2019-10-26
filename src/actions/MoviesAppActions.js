import {
    SEARCH_MOVIES,
    SEARCH_MOVIES_RESPONSE,
} from './types'


export const searchMovies = (keyword) => ({
    type: SEARCH_MOVIES,
    payload: { keyword }
})

export const searchMoviesResponse = (response) => ({
    type: SEARCH_MOVIES_RESPONSE,
    payload: { response }
})