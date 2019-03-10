import {ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, INIT_LIST_ACTION} from "./actionTypes";
import axios from 'axios';

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
export const getTodoList = () => {
  // 在创建action的时候会自动接收到一个dispatch ，可以直接使用
  return (dispatch) => {
    axios.get('http://localhost:8080/').then((res) => {
      const data = res.data;
      const action = initListAction(data);
      dispatch(action);
    })
  }
};
