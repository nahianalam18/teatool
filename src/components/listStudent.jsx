import React, { Component } from "react";
import { Collapse, Icon } from "antd";
import UserForm from "./UserForm";
const { Panel } = Collapse;

class StudentList extends Component {
  state = {
    students: [
      {
        id: 1,
        firstname: "Catherine",
        lastname: "Bullers",
        grade: "1.0.7",
        age: 9,
        notes: "Macropus eugenii",
        parentemail: "cbullers0@meetup.com"
      },
      {
        id: 2,
        firstname: "Annadiana",
        lastname: "De Ferrari",
        grade: "7.9.0",
        age: 5,
        notes: "Prionace glauca",
        parentemail: "adeferrari1@youtu.be"
      },
      {
        id: 3,
        firstname: "Riley",
        lastname: "Fretson",
        grade: "0.7.3",
        age: 5,
        notes: "Psittacula krameri",
        parentemail: "rfretson2@mozilla.com"
      },
      {
        id: 4,
        firstname: "Clim",
        lastname: "Eglise",
        grade: "5.32",
        age: 6,
        notes: "unavailable",
        parentemail: "ceglise3@feedburner.com"
      },
      {
        id: 5,
        firstname: "Vanya",
        lastname: "Bewshaw",
        grade: "5.7.8",
        age: 9,
        notes: "Acridotheres tristis",
        parentemail: "vbewshaw4@earthlink.net"
      },
      {
        id: 6,
        firstname: "Joseito",
        lastname: "Slayford",
        grade: "5.2",
        age: 7,
        notes: "Macaca radiata",
        parentemail: "jslayford5@ning.com"
      },
      {
        id: 7,
        firstname: "Bride",
        lastname: "Fullbrook",
        grade: "7.3.0",
        age: 7,
        notes: "Lamprotornis superbus",
        parentemail: "bfullbrook6@youtu.be"
      },
      {
        id: 8,
        firstname: "Kristine",
        lastname: "Baiden",
        grade: "0.3.6",
        age: 6,
        notes: "Helogale undulata",
        parentemail: "kbaiden7@timesonline.co.uk"
      },
      {
        id: 9,
        firstname: "Richy",
        lastname: "Routham",
        grade: "0.17",
        age: 6,
        notes: "Vulpes vulpes",
        parentemail: "rroutham8@fema.gov"
      },
      {
        id: 10,
        firstname: "Stephie",
        lastname: "Nerne",
        grade: "0.85",
        age: 6,
        notes: "Chauna torquata",
        parentemail: "snerne9@nbcnews.com"
      },
      {
        id: 11,
        firstname: "Amil",
        lastname: "Diwell",
        grade: "0.73",
        age: 7,
        notes: "Spheniscus magellanicus",
        parentemail: "adiwella@npr.org"
      },
      {
        id: 12,
        firstname: "Kristel",
        lastname: "Kacheler",
        grade: "1.0.4",
        age: 10,
        notes: "Vulpes vulpes",
        parentemail: "kkachelerb@dmoz.org"
      }
    ]
  };

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
            <Panel header="Add New Student">
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
              <span>Age: {student.age}</span>
              <br></br>
              <span>Grade: {student.interestLevel}</span>
              <br></br>
              <span>Parent Email: {student.parentemail}</span>
              <br></br>
              <span>Notes: {student.notes}</span>
            </Panel>
          ))}
        </Collapse>
      </div>
    );
  }
}

export default StudentList;
