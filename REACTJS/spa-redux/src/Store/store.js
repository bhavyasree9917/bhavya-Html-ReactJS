import { createStore, combineReducers } from "redux"

import { employeeReducer } from "./employeeReducer";
import { usersReducer } from "./userReducer";



const rootReducer = combineReducers({
  employees: employeeReducer,
  students: null,
  users: usersReducer

});



const store = createStore(rootReducer);

export default store;
