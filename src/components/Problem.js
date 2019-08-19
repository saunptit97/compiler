/* eslint-disable import/first */
import React from 'react';
import { Menu, Icon } from 'antd';
import { Row, Col } from 'antd';
const { SubMenu } = Menu;

import Description from "./problem/Description";
import Compiler from "./problem/Compiler";

export default class Problem extends React.Component{
  render() {
  	var {language_id} = this.props;
    return (
        <Row>
            <Description />
            <Compiler language_id ={language_id} />
        </Row>
    );
  }
}
