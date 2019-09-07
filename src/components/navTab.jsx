import React, { Component } from "react";
import homeTab from "./home";
import { Tabs, Button, Icon } from "antd";

const { TabPane } = Tabs;

const operations = <Button type="primary">Login</Button>;

class TopTab extends Component {
  state = {};
  render() {
    return (
      <div>
        <Tabs tabBarExtraContent={operations}>
          <Icon type="home" />
          <TabPane className="TabContent" tab="Home" key="1">
            content of tab2
          </TabPane>
          <TabPane className="TabContent" tab="Tab 2" key="2">
            Content of tab 2
          </TabPane>
          <TabPane className="TabContent" tab="Tab 3" key="3">
            Content of tab 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default TopTab;
