import { ADD_CONTACT, REMOVE_CONTACT, FILTER_CONTACT } from "./constants";
import { v4 as uuidv4 } from "uuid";
const addNewContact = (name, number) => ({
  type: ADD_CONTACT,
  payload: {
    id: uuidv4(),
    name,
    number,
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

export { addNewContact, removeContact, changeFilter };
