import React from 'react';

import { Row, Col } from 'antd';
export default class Compiler extends React.Component{
  render() {
    return (
      <Col span={12} className="compiler-editor"> 
        <div  style={{height: '100%'}}>
          <h2>Content</h2>
        </div>
      </Col>
    );
  }
}
