import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
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
                    ref={(input) => {this.input = input}}
                    />
                    <button
                      onClick={this.handleBtnClick}
                    >提交</button>
                </div>
                <ul ref={(ul) => {this.ul = ul}}>
                  {this.getTodoItem()}
                </ul>
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
        console.log(e.target);
        console.log(this.input.value);
        const value = this.input.value;
        this.setState(() => {
          return {
            inputValue: value
          }
        })
    }
    handleBtnClick() {
      this.setState((prevState) => {  // prevState state修改之前的值
        return {
          list: [...prevState.list, prevState.inputValue],
          inputValue: ''
        }
      }, () => {
          console.log(this.ul.querySelectorAll('div').length);
      });
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
