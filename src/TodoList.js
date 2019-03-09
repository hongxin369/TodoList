import React, {Component, Fragment} from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import { List } from 'antd';

import store from './store/index';   // 引入仓库store
// import { ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes';
import {getInputChangeAction, getAddItemAction,getDeteleItemAction} from './store/actionCreators';

import 'antd/dist/antd.css';


export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    // 组件订阅store  subscribe中有一个函数， 只要store中的数据发生改变， 函数就会被自动执行
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return(
      <Fragment>
        <div style={{marginTop: '10px', marginLeft: '10px'}}>
          <Input
            value={this.state.inputValue}
            placeholder='todo info'
            style={{width: '300px', marginRight: '10px'}}
            onChange={this.handleInputChange}
          />
          <Button
            type="primary"
            onClick={this.handleBtnClick}
          >提交</Button>
        </div>
        <List
          style={{marginTop:'10px',marginLeft: '10px', width:'300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this,index)}> {item}</List.Item>)}
        />
      </Fragment>
    )
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
      const action = getDeteleItemAction(index);
      store.dispatch(action);
    }
}
