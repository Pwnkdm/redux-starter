import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { authReducer } from "./Auth/auth.reducer";
import { feedReducer } from "./Feeds/feeds.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  auth: authReducer,
  feeds: feedReducer,
});

export const store = legacy_createStore(RootReducer, applyMiddleware(thunk));
