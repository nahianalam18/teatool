import React, { Component } from "react";
import StudentList from "./listStudent";
import { Tabs, Button, Icon } from "antd";

const { TabPane } = Tabs;

const operations = <Button type="primary">Login</Button>;

class TopTab extends Component {
  state = {};
  render() {
    return (
      <div>
        <Tabs tabBarExtraContent={operations}>
          <TabPane tab="Tab 1" key="1">
            <header className="App-header">
              <h1>Hello World</h1>
            </header>
          </TabPane>
          <TabPane tab="Student List" key="2">
            <StudentList></StudentList>
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of tab 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default TopTab;
