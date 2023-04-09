import axios from 'axios'
import { TASKS_FETCH_FAILED, TASKS_FETCH_REQUEST, TASKS_FETCH_SUCCESS } from './types'



export const load_tasks = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
    }


    try {
        dispatch({
            type: TASKS_FETCH_REQUEST
        })

        const res = await axios.get(`${process.env.REACT_APP_API_URL}${window.location.pathname}`, config)

        dispatch({
            type: TASKS_FETCH_SUCCESS,
            payload: res.data
        });
    } catch(err){
        dispatch({
            type: TASKS_FETCH_FAILED
        });
    }

    } else{
        dispatch({
            type: TASKS_FETCH_FAILED
        });
    }
};
