import { PROJECT_LOADED_FAIL, PROJECT_LOADED_SUCCESS } from "../actions/types"



const initialState = {
  projects: null,
}

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {

  case PROJECT_LOADED_SUCCESS:
    return {
      ...state,
      projects: payload
    }

  case PROJECT_LOADED_FAIL:
    return {...state}

  default:
    return state
  }
}
