import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import Test from './Test'
import './index.css'

class TodoList extends Component{
    constructor(props) {
        super(props);
        // 当组件的state或者props发生改变的时候, render函数就会执行
        this.state = {
            inputValue: '',
            list: []
        };
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    render() {
        return(
            <Fragment>
                <div>
                  <label htmlFor="insertArea">输入内容</label>
                    <input
                    id="insertArea"
                    type="text"
                    className='input'
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    />
                    <button
                      onClick={this.handleBtnClick}
                    >提交</button>
                </div>
                <ul>
                  {this.getTodoItem()}
                </ul>
              <Test content={this.state.inputValue}/>
            </Fragment>
            )
    }
    getTodoItem() {
      return (
        this.state.list.map((item, index) => {
          return (
              <TodoItem
                key={index}
                index={index}
                content={item}
                handleItemDelete={this.handleItemDelete}
              />
          )
        })
      )
    }
    handleInputChange(e) {
        const value = e.target.value;
        this.setState(() => {
          return {
            inputValue: value
          }
        })
        // this.setState({
        //   inputValue: e.target.value
        // })
    }
    handleBtnClick() {
      this.setState((prevState) => {  // prevState state修改之前的值
        return {
          list: [...prevState.list, prevState.inputValue],
          inputValue: ''
        }
      });
        // this.setState({
        //   list: [...this.state.list, this.state.inputValue],
        //   inputValue: ''
        // })
    }
    handleItemDelete(index) {
      const list = [...this.state.list];
      list.splice(index, 1);
      this.setState(() => {
        return {
          list: list
        }
      })
      // this.setState({
      //   list: list
      // })
    }

}
export default TodoList;
