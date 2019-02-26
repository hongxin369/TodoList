import React, {Component} from 'react';

export default class TodoItem extends Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    const {content} = this.props
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
}
