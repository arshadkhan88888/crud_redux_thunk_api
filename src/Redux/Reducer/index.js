import { combineReducers } from "redux";
import usersData from "./ReducerFunstions";

const rootReducer = combineReducers({
  users: usersData,
});

export default rootReducer;
