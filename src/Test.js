import React, {Component} from 'react';

export default class Test extends Component{
  // 当父组件的render函数被执行时, 它的子组件的render都将被重新执行一次
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    console.log('Test render');
    return <div>{this.props.content}</div>
  }
}
