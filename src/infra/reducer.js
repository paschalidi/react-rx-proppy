import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import appReducer from "../app/reducer";
import { fetchHackerNews } from "../app/epic";

export const rootEpic = combineEpics(fetchHackerNews);
export const rootReducer = combineReducers({ appReducer });
