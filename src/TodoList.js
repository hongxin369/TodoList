import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import './index.css';

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
    // 在组件即将被挂在到页面的时刻会自动执行
    componentWillMount() {
      console.log('componentWillMount')
    }
    // 组件被挂载到页面之后， 被自动执行
    componentDidMount() {
      axios.get('http://localhost:8080').then((res) => {
        console.log('success');
        console.log(res.data);
        this.setState(() => {
          return {
            list: [...res.data]
          }
        })
      }).catch(() => {console.log('error')})
    }
    // 组件被更新之前，它会被自动执行
    shouldComponentUpdate() {
      return true
    }
    // 组件被更新之前， 它会自动执行， 但是他是在shouldComponentUpdate之后被执行，
    // 如果shouldComponentUpdate返回true它才执行
    componentWillUpdate() {

    }
    // 组件更新完成之后， 它会被执行
    componentDidUpdate() {
      
    }
    // 当一个组件从父组件接收参数，
    // 只要父组件的render函数被重新执行了， 子组件的这个生命周期函数就会被执行
    // 如果这个组件第一次存在于父组件中， 不会执行。
    // 如果这个组件之前已经存在于父组件中， 才会执行。
    componentWillReceiveProps() {

    }
    
}
export default TodoList;
