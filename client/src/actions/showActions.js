import axios from 'axios'
import { GET_SHOWS, ADD_SHOW, DELETE_SHOW, SHOWS_LOADING  } from './types'

export const getShows = () => dispatch => {
    dispatch(setShowsLoading());
    axios
        .get('/api/shows')
        .then(res => 
            dispatch({
                type: GET_SHOWS,
                payload: res.data
            }))
}

export const addShow = (show) => dispatch => {
    axios
        .post('/api/shows', show)
        .then(res =>
            dispatch({
               type: ADD_SHOW,
               payload: res.data 
            })
        )
}

export const deleteShow = (id) => dispatch => {
axios.delete(`/api/shows/${id}`).then(res => 
    dispatch({
        type: DELETE_SHOW,
        payload: id
    })
    )
}


export const setShowsLoading = () => {
    return {
        type: SHOWS_LOADING
    }
}