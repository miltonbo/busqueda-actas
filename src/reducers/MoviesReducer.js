import {
    SEARCH_MOVIES,
    SEARCH_MOVIES_RESPONSE,
} from 'Actions/types'
import { NotificationManager } from 'react-notifications'

const INIT_STATE = {
    movies: [],
    loading: false,
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case SEARCH_MOVIES:
            return { ...state, loading: true }

        case SEARCH_MOVIES_RESPONSE:
            const { response } = action.payload
            if (response.code !== 'ok') {
                NotificationManager.error(response.message, 'Error')
                return { ...state, loading: false, movies: [] } 
            }
            return { ...state, loading: false, movies: response.movies }
        
        default: return { ...state }
    }
}