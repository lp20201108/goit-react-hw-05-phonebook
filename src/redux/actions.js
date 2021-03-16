import { ADD_CONTACT, REMOVE_CONTACT, FILTER_CONTACT } from "./constants";
import { v4 as uuidv4 } from "uuid";

const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: {
    id: uuidv4(),
    ...contact,
  },
});

const removeContact = (id) => ({
  type: REMOVE_CONTACT,
  payload: id,
});

const changeFilter = (filter) => ({
  type: FILTER_CONTACT,
  payload: filter,
});

export { addContact, removeContact, changeFilter };
