import React, {Component, Fragment} from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import { List, Typography } from 'antd';
import 'antd/dist/antd.css';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <Fragment>
        <div style={{marginTop: '10px', marginLeft: '10px'}}>
          <Input placeholder='todo info' style={{width: '300px', marginRight: '10px'}}/>
          <Button type="primary">提交</Button>
        </div>
        <List
          style={{marginTop:'10px',marginLeft: '10px', width:'300px'}}
          bordered
          dataSource={data}
          renderItem={item => (<List.Item> {item}</List.Item>)}
        />
      </Fragment>
    )
  }
}
