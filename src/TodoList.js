import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'


class TodoList extends Component{

  render() {
    return (
      <Fragment>
        <div>
          <input onChange={this.props.handleInputChange} value={this.props.inputValue} type="text"/>
          <button onClick={this.props.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.props.list.map((item, index) =>{
            return <li
              key={index}
              // onClick={this.props.handleDeleteItem(index)}
            >{item}</li>
          })}
        </ul>
      </Fragment>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
};
// store.dispatch, props
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      };
      dispatch(action)
    },
    handleBtnClick() {
      const action = {
        type: 'add_todo_item'
      };
      dispatch(action);
    },
    handleDeleteItem(index) {
      console.log(index);
      const action = {
        type: 'delete_todo_item',
        index: index
      };
      dispatch(action)
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
