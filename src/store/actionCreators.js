import {ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM} from "./actionTypes";

export const getInputChangeAction = (value) => {
  return (
    {
      type: CHANGE_INPUT_VALUE,
      value: value
    }
  )
};
export const getAddItemAction = () => {
  return (
    {
      type: ADD_TODO_ITEM
    }
  )
};
export const getDeteleItemAction = (index) => {
  return (
    {
      type: DELETE_TODO_ITEM,
      index: index
    }
  )
};
