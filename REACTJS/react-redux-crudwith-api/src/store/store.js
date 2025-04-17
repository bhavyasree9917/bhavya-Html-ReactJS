import { combineReducers, createStore, applyMiddleware } from "redux";
import { usersReducer } from "./usersReducer";
import { thunk } from "redux-thunk"; 

const rootReducer = combineReducers({
  users: usersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export { rootReducer, store };
