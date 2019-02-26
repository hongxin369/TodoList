import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    const {content, test} = this.props;
    return(
      <div
      onClick={this.handleClick}
      >{test} - {content}</div>
    )
  }
  handleClick() {
    const {handleItemDelete, index} = this.props;
    handleItemDelete(index);
  }
}

// props 校验
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
};
TodoItem.defaultProps = {
  test: 'hello world'
};
