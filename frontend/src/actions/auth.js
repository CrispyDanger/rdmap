import jwt_decode from 'jwt-decode'
import axios from 'axios'
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
} from './types';


export const checkAuthenticated = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ token: localStorage.getItem('access')})

        try {
            const res =await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/verify/`, body, config)
            if (res.data.code !== 'token_not_valid') {
                dispatch({
                    type: AUTHENTICATED_SUCCESS
                })
            } else {
                dispatch({
                    type: AUTHENTICATED_FAIL
                })
            }
        } catch (error) {
            dispatch({
                type: AUTHENTICATED_FAIL
            })
        }
    } else {
        dispatch({
            type: AUTHENTICATED_FAIL
        })

    }
};



export const load_user = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
    }

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/users/me/`, config);

        dispatch({
            type: USER_LOADED_SUCCESS,
            payload: res.data
        });

    } catch(err){
        dispatch({
            type: USER_LOADED_FAIL
        });
    }

    } else{
        dispatch({
            type: USER_LOADED_FAIL
        });
    }
};




export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({email, password});

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`, body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(load_user());

    } catch(err){

        dispatch({
            type: LOGIN_FAIL
        });
    }
};


export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
};



const isTokenExpired = () => {
    const decoded = jwt_decode(localStorage.getItem("access"))
    return decoded.iat > Date.now()
}



const refreshToken = () => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ token: localStorage.getItem('refresh')})

    try {
    const newToken = axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/refresh/`,body, config);

    dispatch({
        type: REFRESH_SUCCESS,
        payload: newToken.data
    })
    } catch(err) {
        dispatch({
            type: REFRESH_FAIL
        })

    }

}


//TO FIX
axios.interceptors.request.use(async (request) => {
    if(isTokenExpired()){
        refreshToken()
    }
})
