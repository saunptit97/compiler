/* eslint-disable import/first */
import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css'; 
import { Row, Col } from 'antd';
import { Layout , Icon} from 'antd';
import "./App.css";
const { Header, Footer, Sider, Content } = Layout;
import Problem from "./components/Problem";

export default class App extends React.Component{
  render(){
     return (
      <div>
        <Layout className="container">
          <Problem />
        </Layout>
      </div>
    );
  }
 
}
