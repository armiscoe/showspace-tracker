
import { GET_SHOWS, ADD_SHOW, DELETE_SHOW, SHOWS_LOADING } from '../actions/types'

const initialState = {
    shows: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_SHOWS:
            return {
                ...state,
                shows: action.payload,
                loading: false
            };
            case DELETE_SHOW:
                return {
                    ...state,
                    shows: state.shows.filter(show => show._id !== action.payload)
            };
            case ADD_SHOW:
                return {
                    ...state,
                    shows: [action.payload, ...state.shows]
            };
            case SHOWS_LOADING:
                return {
                    ...state,
                    loading: true
            };

        default:
            return state;
    }
}