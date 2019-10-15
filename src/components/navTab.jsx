import React, { Component } from "react";
import StudentList from "./listStudent";
import Homepage from "./home";
import { Tabs, Button } from "antd";

const { TabPane } = Tabs;

const operations = <Button type="primary">Login</Button>;

class TopTab extends Component {
  state = {};
  render() {
    return (
      <div>
        <Tabs tabBarExtraContent={operations}>
          <TabPane tab="Home" key="1">
            <Homepage></Homepage>
          </TabPane>
          <TabPane tab="Student List" key="2">
            <StudentList></StudentList>
          </TabPane>
          <TabPane tab="Teacher Profile" key="3">
            Content of tab 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default TopTab;
