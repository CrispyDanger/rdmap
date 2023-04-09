import { TASKS_FETCH_FAILED, TASKS_FETCH_REQUEST, TASKS_FETCH_SUCCESS } from "../actions/types";


const initialState = {
    tasks: [],
    loading: true
}

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {

      case TASKS_FETCH_REQUEST:
        return {loading: true}

    case TASKS_FETCH_SUCCESS:
      console.log("tasks in reducer", payload)
      return {
        ...state,
        tasks: payload,
        loading: false
      }

    case TASKS_FETCH_FAILED:
      return {...state, loading: true}

    default:
      return state
    }
  }
