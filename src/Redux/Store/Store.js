import { applyMiddleware, createStore } from "redux";
import rootReducer from "../Reducer/index";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk,logger))
);
export default store;
