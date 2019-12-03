import React, { Component } from "react";
import Homepage from "./home";
import { Tabs } from "antd";
import TeacherProfile from "./teacherProfile";

const { TabPane } = Tabs;

class TopTab extends Component {
  render() {
    return (
      <div>
        <Tabs>
          <TabPane tab="Home" key="1">
            <Homepage></Homepage>
          </TabPane>
          <TabPane tab="Login" key="2">
            <TeacherProfile />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default TopTab;

//ReactDom.render(<Teacher/>, document.getElementById("addclass"));

// {
//   <TabPane tab="add Class" key="4">
// <AddClass>
//   {/* <form onSubmit = {fields => this.onSubmit(fields)} /> */}
// </AddClass>
// }
