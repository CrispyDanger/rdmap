// import axios from "axios";
// import { PROJECT_LOADED_FAIL, PROJECT_LOADED_SUCCESS, USER_LOADED_FAIL } from "./types";



// export const load_projects = () => async dispatch => {
//     if (localStorage.getItem('access')) {
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${localStorage.getItem('access')}`,
//                 'Accept': 'application/json'
//             }
//     }

//     try {
//         const res = await axios.get(`${process.env.REACT_APP_URL}/projects/`, config);

//         dispatch({
//             type: PROJECT_LOADED_SUCCESS,
//             payload: res.data
//         });

//     } catch(err){
//         dispatch({
//             type: PROJECT_LOADED_FAIL
//         });
//     }

//     } else{
//         dispatch({
//             type: PROJECT_LOADED_FAIL
//         });
//     }
// };
