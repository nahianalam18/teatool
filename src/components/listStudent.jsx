import React, { Component } from "react";
import { Collapse, Icon, Button } from "antd";
import UserForm from "./UserForm";
import Tags from "./tags";
import * as Firebase from "firebase";
import firebaseConfig from "../config";

const { Panel } = Collapse;

Firebase.initializeApp(firebaseConfig);
Firebase.analytics();

class StudentList extends Component {
  state = {
    students: [
      {
        id: 0,
        firstname: "Catherine",
        lastname: "Bullers",
        grade: "1.0.7",
        age: 9,
        notes: "Macropus eugenii",
        parentemail: "cbullers0@meetup.com"
      },
      {
        id: 1,
        firstname: "Annadiana",
        lastname: "De Ferrari",
        grade: "7.9.0",
        age: 5,
        notes: "Prionace glauca",
        parentemail: "adeferrari1@youtu.be"
      },
      {
        id: 2,
        firstname: "Riley",
        lastname: "Fretson",
        grade: "0.7.3",
        age: 5,
        notes: "Psittacula krameri",
        parentemail: "rfretson2@mozilla.com"
      },
      {
        id: 3,
        firstname: "Clim",
        lastname: "Eglise",
        grade: "5.32",
        age: 6,
        notes: "unavailable",
        parentemail: "ceglise3@feedburner.com"
      },
      {
        id: 4,
        firstname: "Vanya",
        lastname: "Bewshaw",
        grade: "5.7.8",
        age: 9,
        notes: "Acridotheres tristis",
        parentemail: "vbewshaw4@earthlink.net"
      },
      {
        id: 5,
        firstname: "Joseito",
        lastname: "Slayford",
        grade: "5.2",
        age: 7,
        notes: "Macaca radiata",
        parentemail: "jslayford5@ning.com"
      },
      {
        id: 6,
        firstname: "Bride",
        lastname: "Fullbrook",
        grade: "7.3.0",
        age: 7,
        notes: "Lamprotornis superbus",
        parentemail: "bfullbrook6@youtu.be"
      },
      {
        id: 7,
        firstname: "Kristine",
        lastname: "Baiden",
        grade: "0.3.6",
        age: 6,
        notes: "Helogale undulata",
        parentemail: "kbaiden7@timesonline.co.uk"
      },
      {
        id: 8,
        firstname: "Richy",
        lastname: "Routham",
        grade: "0.17",
        age: 6,
        notes: "Vulpes vulpes",
        parentemail: "rroutham8@fema.gov"
      },
      {
        id: 9,
        firstname: "Stephie",
        lastname: "Nerne",
        grade: "0.85",
        age: 6,
        notes: "Chauna torquata",
        parentemail: "snerne9@nbcnews.com"
      },
      {
        id: 10,
        firstname: "Amil",
        lastname: "Diwell",
        grade: "0.73",
        age: 7,
        notes: "Spheniscus magellanicus",
        parentemail: "adiwella@npr.org"
      },
      {
        id: 11,
        firstname: "Kristel",
        lastname: "Kacheler",
        grade: "1.0.4",
        age: 10,
        notes: "Vulpes vulpes",
        parentemail: "kkachelerb@dmoz.org"
      }
    ]
  };

  writeUserData = () => {
    Firebase.database()
      .ref("/")
      .set(this.state);
    console.log("DATA SAVED");
  };

  getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
    console.log("DATA RETRIEVED");
  };
  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps, prevState) {
    // check on previous state
    // only write when it's different with the new state
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }
  addStudent = e => {
    const student = {
      firstname: e.firstname,
      lastname: e.lastname,
      grade: e.grade,
      age: e.age,
      parentemail: e.parentemail,
      notes: e.notes,
      id: this.state.students.length + 1
    };
    
    console.log(student);
    let students = [...this.state.students, student];
    this.setState({
      students: students
    });
  };
  removeData = developer => {
    console.log(this.state.students.length);
    console.log(developer);
    var value = this.state.students[developer.id - 1];
    console.log(value);
    var array = [...this.state.students];
    array.splice(-1, 1);

    this.setState({ students: array });
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
              <Button onClick={() => this.removeData(student)}>Remove</Button>
            </Panel>
          ))}
        </Collapse>
      </div>
    );
  }
}

export default StudentList;
