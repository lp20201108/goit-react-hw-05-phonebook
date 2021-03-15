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
      const oldContactName = state.find(
        (contact) => contact.name === payload.name
      );

      const oldContactNumber = state.find(
        (contact) => contact.number === payload.number
      );

      if (oldContactName) {
        alert(
          `This contact NAME already exists
         as Name:${oldContactName.name} Tel:${oldContactName.number}`
        );
        return;
      } else if (oldContactNumber) {
        alert(
          `This contact NUMBER already exists as 
         Tel:${oldContactNumber.number} Name:${oldContactNumber.name}`
        );
        return;
      } else if (!payload.name.length) {
        alert("Please, enter the contact name");
      } else if (!payload.number.length) {
        alert("Please, enter the contact number");
      } else return [...state, payload];
      break;

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
