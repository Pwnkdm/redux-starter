import {
  GET_FEEDS_ERROR,
  GET_FEEDS_LOADING,
  GET_FEEDS_SUCESS,
} from "./feeds.actionTypes";
import axios from "axios";

export const getFeedsAPI = () => (dispatch) => {
  dispatch({ type: GET_FEEDS_LOADING });
  axios
    .get("http://localhost:8080/feeds")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_FEEDS_SUCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: GET_FEEDS_ERROR });
    });
};
