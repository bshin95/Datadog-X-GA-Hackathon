
import api from "../utils/api"
import { GET_ALL_USERS_SUCCESS, GET_ALL_USERS_FAILURE, GET_USER_SUCCESS, GET_USER_FAILURE } from "./types"

//Get all Users
export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await api.get("/users")
    dispatch({
      type: GET_ALL_USERS_SUCCESS,
      payload: res.data.users,
    })
  } catch (err) {
    dispatch({
      type: GET_ALL_USERS_FAILURE,
    })
  }
}

export const getUser = userId => async (dispatch) => {
  try {
    const res = await api.get(`/users/${userId}`)
    dispatch({
      type: GET_USER_SUCCESS,
      payload: res.data.user,
    })
  } catch (err) {
    dispatch({
      type: GET_USER_FAILURE,
    })
  }
}