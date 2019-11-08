import React, { Component } from "react";
import StudentList from "./listStudent";
import Homepage from "./home";
import Teacher from "./teachersProfile";
import Login from "./login";
//import AddClass from "./addClass";
import SignUp from "./SignUp";
import { Tabs, Button } from "antd";
import TeacherProfile from "./teacherProfile";

const { TabPane } = Tabs;

const operations = <Button type="primary">Login</Button>;

class TopTab extends Component {
  
  render() {
    return (
      <div id = "addclass">
        <Tabs tabBarExtraContent={operations}>
          <TabPane tab="Home" key="1">
            <Homepage></Homepage>
          </TabPane>
          <TabPane tab="Student List" key="2">
            <StudentList></StudentList>
          </TabPane>
          <TabPane tab="Teacher Profile" key="3">
         //   <TeacherProfile />
          </TabPane>
          <TabPane tab="Sign Up" key="4">
            <SignUp> </SignUp>
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
