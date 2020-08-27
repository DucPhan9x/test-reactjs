import contactsReducer from "./contactsReducer";
import filtersReducer from "./filterContactReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
});

export default reducers;
