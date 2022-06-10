import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCESS,
  LOGOUT,
} from "./auth.actionTypes";
import axios from "axios";

export const loginAPI = (data) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  axios
    .post("https://reqres.in/api/login", {
      email: data.email,
      password: data.password,
    })
    .then((res) => {
      dispatch({ type: LOGIN_SUCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: LOGIN_ERROR });
    });
};

export const logoutAPI = () => ({ type: LOGOUT });
