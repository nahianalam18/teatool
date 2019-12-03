import React, { Component } from "react";
import { Collapse, Icon, Button, Progress } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import UserForm from "./UserForm";
import Tags from "./tags";
import * as Firebase from "firebase";
import firebaseConfig from "../config";

const { Panel } = Collapse;

Firebase.initializeApp(firebaseConfig); // Connecting to the database
Firebase.analytics();

class StudentList extends Component {
  state = {
    students: [{}],
    tags: []
  };

  writeUserData = () => {
    // Writing data to database
    Firebase.database()
      .ref("/")
      .set(this.state); // Send State data to database
    console.log("DATA SAVED");
  };

  getUserData = () => {
    // Fetch data from database
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state); // Save database data to state to how on webpage
    });
    console.log("DATA RETRIEVED");
  };
  componentDidMount() {
    this.getUserData(); // Call getUserData function
  }

  componentDidUpdate(prevProps, prevState) {
    // check on previous state
    // only write when it's different with the new state
    if (prevState !== this.state) {
      this.writeUserData(); // Writing data to database automatically
    }
  }
  addStudent = e => {
    // Add a student to the state.
    const student = {
      firstname: e.firstname,
      lastname: e.lastname,
      grade: e.grade,
      age: e.age,
      parentemail: e.parentemail,
      notes: e.notes,
      id: this.state.students.length,
      progressLeadership: 0,
      progressCommunication: 0,
      progressEmpathy: 0,
      progressCreativity: 0
    };

    console.log(student);
    let students = [...this.state.students, student];
    this.setState({
      students: students // Update state after adding the new student entry
    });
  };
  removeData = developer => {
    // Remove a student from the list
    console.log(this.state.students.length);
    //console.log(developer);
    var value = this.state.students[developer.id - 1];
    console.log(value);
    var array = [...this.state.students];
    array.splice(-1, 1);

    this.setState({ students: array }); // Update state after removing the selected student
  };

  incrementProgress = (event, des) => {
    var value = this.state.students[event.id];
    //Increment progress of Leadership value by 1
    if (des === "lead") value.progressLeadership = value.progressLeadership + 1;
    //Increment progress of Communication value by 1
    else if (des === "comm")
      value.progressCommunication = value.progressCommunication + 1;
    //Increment progress of Empathy value by 1
    else if (des === "emp") value.progressEmpathy = value.progressEmpathy + 1;
    //Increment progress of Communication value by 1
    else if (des === "crea")
      value.progressCreativity = value.progressCreativity + 1;

    let info = [...this.state.students];
    this.setState({
      students: info // Update state after progress has been incremented
    });
  };
  decrementProgress = (event, des) => {
    var value = this.state.students[event.id];

    //Decrement progress of Leadership value by 1
    if (des === "lead") value.progressLeadership = value.progressLeadership - 1;
    //Decrement progress of Communication value by 1
    else if (des === "comm")
      value.progressCommunication = value.progressCommunication - 1;
    //Decrement progress of Empathy value by 1
    else if (des === "emp") value.progressEmpathy = value.progressEmpathy - 1;
    //Decrement progress of Communication value by 1
    else if (des === "crea")
      value.progressCreativity = value.progressCreativity - 1;

    let info = [...this.state.students];
    this.setState({
      students: info // Update state after the progress has been decremented
    });
  };
  giveColorOfBar = number => {
    // Return a red color hex value to be rendered
    if (number >= 0 && number < 50) return "#FF0004";
    // Return a yellow color hex value to be rendered
    else if (number >= 50 && number < 80) return "#FFC900";
    // Return a green color hex value to be rendered
    else if (number >= 80) return "#4CFF00";
  };

  customPanelStyle = {
    background: "#1c1f75",
    borderRadius: 44,
    marginBottom: 24,
    border: 0,
    overflow: "hidden"
  };

  render() {
    return (
      <div>
        <div className="CenterA">
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) => (
              <Icon type="caret-right" rotate={isActive ? 90 : 0} />
            )}
          >
            <Panel onClick={this.handleInputConfirm} header="Add New Student">
              <UserForm userInfo={this.addStudent} />
            </Panel>
          </Collapse>
        </div>
        <Collapse>
          {this.state.students.map(student => (
            <Panel
              header={student.firstname + " " + student.lastname}
              key={student.id}
            >
              <Tags color="Green" />
              <span>Age: {student.age}</span>
              <br></br>
              <span>Grade: {student.interestLevel}</span>
              <br></br>
              <span>Parent Email: {student.parentemail}</span>
              <br></br>
              <span>Notes: {student.notes}</span>
              <br></br>
              {
                <Progress
                  percent={student.progressLeadership}
                  status="active"
                  strokeColor={this.giveColorOfBar(student.progressLeadership)}
                />
              }
              <span>Leadership</span>
              <Icon
                style={{ margin: "5px" }}
                type="plus"
                onClick={() => this.incrementProgress(student, "lead")}
              />{" "}
              <Icon
                style={{ margin: "5px" }}
                type="minus"
                onClick={() => this.decrementProgress(student, "lead")}
              />{" "}
              <br></br>
              {
                <Progress
                  percent={student.progressCommunication}
                  status="active"
                  strokeColor={this.giveColorOfBar(
                    student.progressCommunication
                  )}
                />
              }
              <span>Communication</span>
              <Icon
                style={{ margin: "5px" }}
                type="plus"
                onClick={() => this.incrementProgress(student, "comm")}
              />{" "}
              <Icon
                style={{ margin: "5px" }}
                type="minus"
                onClick={() => this.decrementProgress(student, "comm")}
              />{" "}
              <br></br>
              {
                <Progress
                  percent={student.progressEmpathy}
                  status="active"
                  strokeColor={this.giveColorOfBar(student.progressEmpathy)}
                />
              }
              <span>Empathy</span>
              <Icon
                style={{ margin: "5px" }}
                type="plus"
                onClick={() => this.incrementProgress(student, "emp")}
              />{" "}
              <Icon
                style={{ margin: "5px" }}
                type="minus"
                onClick={() => this.decrementProgress(student, "emp")}
              />{" "}
              <br></br>
              {
                <Progress
                  percent={student.progressCreativity}
                  status="active"
                  strokeColor={this.giveColorOfBar(student.progressCreativity)}
                />
              }
              <span>Creativity</span>
              <Icon
                style={{ margin: "5px" }}
                type="plus"
                onClick={() => this.incrementProgress(student, "crea")}
              />{" "}
              <Icon
                style={{ margin: "5px" }}
                type="minus"
                onClick={() => this.decrementProgress(student, "crea")}
              />{" "}
              <br></br>
              <Button type="danger" onClick={() => this.removeData(student)}>
                Remove
              </Button>
            </Panel>
          ))}
        </Collapse>
      </div>
    );
  }
}

export default StudentList;
