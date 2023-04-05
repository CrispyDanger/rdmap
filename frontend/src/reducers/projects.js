import { PROJECT_LOADED_FAIL, PROJECT_LOADED_SUCCESS, PROJECT_LOAD_REQUEST } from "../actions/types"



const initialState = {
  projects: [],
  loading: true
}

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {

    case PROJECT_LOAD_REQUEST:
      return {loading: true}

  case PROJECT_LOADED_SUCCESS:
    console.log("payload in reducer", payload)
    return {
      ...state,
      projects: payload,
      loading: false
    }

  case PROJECT_LOADED_FAIL:
    return {...state, loading: true}

  default:
    return state
  }
}
