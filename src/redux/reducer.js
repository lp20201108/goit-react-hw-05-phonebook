import { combineReducers } from "redux";
import { ADD_CONTACT, FILTER_CONTACT, REMOVE_CONTACT } from "./constants";

// const initialState = {
//   contacts: {
//     items: [],
//     filter: "",
//   },
// };

const items = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];

    case REMOVE_CONTACT:
      return state.filter((item) => item.id !== payload);

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case FILTER_CONTACT:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({ items, filter });
