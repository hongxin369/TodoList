import {ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST} from "./actionTypes";

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
export const getDeleteItemAction = (index) => {
  return (
    {
      type: DELETE_TODO_ITEM,
      index: index
    }
  )
};
export const initListAction = (data) => {
  return (
    {
      type: INIT_LIST_ACTION,
      data: data
    }
  )
};
export const getInitList = () => {
  return(
    {
      type: GET_INIT_LIST
    }
  )
};
