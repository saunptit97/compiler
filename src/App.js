/* eslint-disable import/first */
import React from 'react';

import { Layout , Row, Col} from 'antd';
import Problem from "./components/Problem";

import "./App.css";
import "codemirror/lib/codemirror.css";
import 'antd/dist/antd.css'; 
import { Select } from 'antd';
import callAPI from "./util/callAPI";
const { Option } = Select;
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      languages :[],
      language_id : 27,
    }
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(value){
    this.setState({
      language_id: value
    })
  }
  componentWillMount(){ 
   callAPI("languages","GET", null).then(res =>{
     this.setState({
        languages : res.data
     })
   })
 }
 
  render(){
  var languages = this.state.languages.map(
    function iterator( language ) {
        return(
           <Option key={language.id} value={language.id}>{language.name}</Option>
        );
    },
    );
     return (
      <div>
        <Layout className="container">
          <Row>
            <Col span={10}>
              <div className="header-description" style={{background: "#fafafa", padding: "4px 0px", height: "40px"}}> </div>
            </Col>
            <Col span={14}>
             <div className="language" style={{background: "#fafafa", padding: "4px 0px"}}>
                <Select defaultValue="27" style={{ width: 120 }} onChange={this.handleChange}>
                 {languages}
                </Select>
              </div>
            </Col>
          </Row>
          <Problem language_id={this.state.language_id}/> 
        </Layout>
      </div>
    );
  }
 
}
