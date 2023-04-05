import axios from "axios";
import { PROJECT_LOADED_FAIL, PROJECT_LOADED_SUCCESS, PROJECT_LOAD_REQUEST} from "./types";



export const load_projects = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
    }

    // const body = JSON.stringify({ token: localStorage.getItem('access')})

    try {
        dispatch({
            type: PROJECT_LOAD_REQUEST
        })

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/projects/`, config)

        dispatch({
            type: PROJECT_LOADED_SUCCESS,
            payload: res.data
        });
    } catch(err){
        dispatch({
            type: PROJECT_LOADED_FAIL
        });
    }

    } else{
        dispatch({
            type: PROJECT_LOADED_FAIL
        });
    }
};
