import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCESS,
  LOGOUT,
} from "./auth.actionTypes";

const token = localStorage.getItem("token");
const initstate = {
  loading: false,
  error: false,
  isAuth: token ? true : false,
  token: token,
};

export const authReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case LOGIN_SUCESS: {
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loading: false,
        error: false,
        isAuth: true,
        token: payload.token,
      };
    }
    case LOGIN_ERROR: {
      return { ...state, loading: false, error: true, isAuth: false };
    }
    case LOGOUT: {
      localStorage.removeItem("token");
      return { ...state, isAuth: false, token: "" };
    }

    default: {
      return state;
    }
  }
};
