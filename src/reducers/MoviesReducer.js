import {
    SEARCH_MOVIES,
    SEARCH_MOVIES_RESPONSE,
    OBTENER_DATOS_MESA_ACTA,
    OBTENER_DATOS_MESA_ACTA_RESPONSE,
} from 'Actions/types'
import { NotificationManager } from 'react-notifications'

const INIT_STATE = {
    movies: [],
    loading: false,
    acta: {}
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


        case OBTENER_DATOS_MESA_ACTA: 
            return { ...state, loading: true }
        
        case OBTENER_DATOS_MESA_ACTA_RESPONSE:
            if (action.payload.response.code !== 'ok') {
                NotificationManager.error(action.payload.response.message, 'Error')
                return { ...state, loading: false, acta: null }
            }
            return { ...state, loading: false, acta: action.payload.response.acta }

        
        default: return { ...state }
    }
}