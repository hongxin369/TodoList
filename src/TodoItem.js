import React, {Component} from 'react';
// import PropTypes from 'prop-types';

export default class TodoItem extends Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  // 提升性能， 避免组件重复渲染
  shouldComponentUpdate(nextProps, nexState) {  // 接下来props会变成什么样， 接下来state会变成什么样
    // if(nextProps.content !== nexState.content) {
    //   return true;
    // } else {
    //   return false;
    // }
    return false
  }
  render() {
    console.log('child render')
    const {content} = this.props;
    return(
      <div
      onClick={this.handleClick}
      >{content}</div>
    )
  }
  handleClick() {
    const {handleItemDelete, index} = this.props;
    handleItemDelete(index);
  }
  // 当这个组件即将被从页面中剔除的时候， 才会被执行
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
}

// props 校验
// TodoItem.propTypes = {
//   // content: PropTypes.string,
//   deleteItem: PropTypes.func,
//   index: PropTypes.number
// };
// TodoItem.defaultProps = {
// };
