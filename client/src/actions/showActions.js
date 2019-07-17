import axios from 'axios'
import { GET_SHOWS, ADD_SHOW, DELETE_SHOW, SHOWS_LOADING  } from './types'
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions'

export const getShows = () => dispatch => {
    dispatch(setShowsLoading());
    axios
        .get('/api/shows')
        .then(res => 
            dispatch({
                type: GET_SHOWS,
                payload: res.data
            }))
            .catch(err => dispatch(returnErrors(err.response.data, err.response.status))
            )
}

export const addShow = (show) => (dispatch, getState) => {
    axios
        .post('/api/shows', show, tokenConfig(getState))
        .then(res =>
            dispatch({
               type: ADD_SHOW,
               payload: res.data 
            })
        ).catch(err => dispatch(returnErrors(err.response.data, err.response.status))
        )
}

export const deleteShow = (id) => (dispatch, getState) => {
axios.delete(`/api/shows/${id}`, tokenConfig(getState)).then(res => 
    dispatch({
        type: DELETE_SHOW,
        payload: id
    })
    ).catch(err => dispatch(returnErrors(err.response.data, err.response.status))
    )
}


export const setShowsLoading = () => {
    return {
        type: SHOWS_LOADING
    }
}