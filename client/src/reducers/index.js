import { combineReducers } from 'redux';
import showReducer from './showReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    show: showReducer,
    error: errorReducer,
    auth: authReducer
})