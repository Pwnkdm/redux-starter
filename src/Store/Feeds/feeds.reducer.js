import {
  GET_FEEDS_ERROR,
  GET_FEEDS_LOADING,
  GET_FEEDS_SUCESS,
} from "./feeds.actionTypes";

const initstate = {
  getFeeds: {
    loading: false,
    error: false,
  },
  data: [],
};

export const feedReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case GET_FEEDS_LOADING: {
      return {
        ...state,
        getfeeds: {
          ...state.getfeeds,
          loading: true,
          error: false,
        },
      };
    }

    case GET_FEEDS_SUCESS: {
      return {
        ...state,
        getfeeds: {
          ...state.getfeeds,
          loading: false,
          error: false,
        },
        data: payload,
      };
    }

    case GET_FEEDS_ERROR: {
      return {
        ...state,
        getfeeds: {
          ...state.getfeeds,
          loading: false,
          error: true,
        },
      };
    }
    default: {
      return state;
    }
  }
};
