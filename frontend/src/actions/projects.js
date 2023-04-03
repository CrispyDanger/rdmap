import axios from "axios";
import { PROJECT_LOADED_FAIL, PROJECT_LOADED_SUCCESS} from "./types";



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
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/projects/`, config);
        const projects = res.data
        dispatch({
            type: PROJECT_LOADED_SUCCESS,
            payload: projects
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
