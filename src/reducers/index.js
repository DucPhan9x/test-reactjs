import contactsReducer from "./contactsReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  contacts: contactsReducer,
});

export default reducers;
