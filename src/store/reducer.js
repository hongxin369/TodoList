import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
};

//state是上一次仓库里存储的数据， action 是用户穿过李的那句话
// reducer可以接受state， 但是不可以修改state
export default (state = defaultState, action) => {   // action 行动,作用
  //
  if (action.type === CHANGE_INPUT_VALUE) {
    // 拷贝一份state中的数据
    const newState = JSON.parse(JSON.stringify(state));
    // 改变 newState 中的inputValue中的值
    newState.inputValue = action.value;
    // 返回newState 固定写法  返回给了store
    return newState
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  if (action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    console.log(newState);
    return newState;
  }
  return state
}

