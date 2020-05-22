import {
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from "../actions/types"

const initialState = {
  data: [],
  error: "",
  activeUser: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_USERS_SUCCESS:
      return { ...state, data: payload }
    case GET_ALL_USERS_FAILURE:
      return { ...state, error: "Error loading Users" }
    case GET_USER_SUCCESS:
      return { ...state, activeUser: payload }
    case GET_USER_FAILURE:
      return { ...state, error: "Error loading User" }
    default:
      return state
  }
}
