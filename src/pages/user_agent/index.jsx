import React from "react";
import './index.scss'
import { Row, Col, Input } from 'antd';

const { TextArea } = Input;


export default class UserAgent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userAgentMsg: window.window.navigator.userAgent || '',
    };
  }

  render() {
    const { userAgentMsg } = this.state;
    return (
      <div className="user-agent">
        <Row>
          <Col span={12}>
            <div className="item">
              <span>
                user-agent:&nbsp;&nbsp;
              </span>
              <TextArea 
                placeholder="user-agent" 
                className="text"
                value={userAgentMsg}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}