import React, {Component} from 'react';
import TodoListUI from './TodoListUI'

import store from './store/index';   // 引入仓库store
// import { ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes';
import {getInputChangeAction, getAddItemAction,getDeleteItemAction, getTodoList} from './store/actionCreators';




export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    // 组件订阅store  subscribe中有一个函数， 只要store中的数据发生改变， 函数就会被自动执行
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        list={this.state.list}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }
  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);
  }

  handleInputChange(e) {
      // 创建action 固定格式
      // const action = {
      //   type: CHANGE_INPUT_VALUE, // 描述要做怎样的事情
      //   value: e.target.value     // 吧value传过去
      // };
      const action = getInputChangeAction(e.target.value);
      // 调用store中的dispatch()方法把action传过去
      store.dispatch(action);
    }
    handleStoreChange() {
      //组件感知到store中的数据发生变换的时候 重新获取store中的数据
      this.setState(store.getState())
    }
    handleBtnClick () {
      // const action = {
      //   type: ADD_TODO_ITEM,
      // };
      const action = getAddItemAction()
      store.dispatch(action);
    }
    // 删除方法
    handleItemDelete (index) {
      // const action = {
      //   type: DELETE_TODO_ITEM,
      //   index: index
      // };
      const action = getDeleteItemAction(index);
      store.dispatch(action);
    }
}
