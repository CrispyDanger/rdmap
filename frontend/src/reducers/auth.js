import {
LOGIN_SUCCESS,
LOGIN_FAIL,
USER_LOADED_SUCCESS,
USER_LOADED_FAIL,
AUTHENTICATED_SUCCESS,
AUTHENTICATED_FAIL,
LOGOUT,
REFRESH_SUCCESS,
REFRESH_FAIL
} from '../actions/types';

const initialState ={
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null
};

export default function(state = initialState, action) {
    const {type, payload} = action;
    switch(type){
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access);
            localStorage.setItem('refresh', payload.refresh);
            return{
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh,
            }

        case USER_LOADED_SUCCESS:
            return{
                ...state,
                user: payload
            }

        case USER_LOADED_FAIL:
            return{
                ...state,
                user: null
            }

        case LOGIN_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return{
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null
            }
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: false
            }

        case REFRESH_SUCCESS:
            localStorage.setItem("access", payload.access);
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
            }

        case REFRESH_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return{
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null
            }

        case LOGOUT:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            localStorage.removeItem('persist:root');
            return{
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null
            }

        default:
            return state;
    }
};
