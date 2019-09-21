import React, { Component } from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;

class StudentList extends Component {
  state = {
    students: [
      {
        id: 1,
        name: "Virgina Dootson",
        phone: "258-514-9711",
        notes: "core",
        interestLevel: "Kinda"
      },
      {
        id: 2,
        name: "Kettie Fallows",
        phone: "826-430-4783",
        notes: "Open-architected",
        interestLevel: "Alot"
      },
      {
        id: 3,
        name: "Sherwynd Carlick",
        phone: "429-535-8582",
        notes: "throughput",
        interestLevel: "NotMuch"
      },
      {
        id: 4,
        name: "Sherwynd Oram",
        phone: "716-944-2727",
        notes: "zero administration",
        interestLevel: "Alot"
      },
      {
        id: 5,
        name: "Salomon Victoria",
        phone: "894-798-6827",
        notes: "coherent",
        interestLevel: "Alot"
      },
      {
        id: 6,
        name: "Annis Matovic",
        phone: "414-779-6902",
        notes: "Public-key",
        interestLevel: "NotMuch"
      },
      {
        id: 7,
        name: "Linc Siegertsz",
        phone: "241-791-0263",
        notes: "grid-enabled",
        interestLevel: "Alot"
      },
      {
        id: 8,
        name: "Rodie Thyng",
        phone: "971-870-7928",
        notes: "workforce",
        interestLevel: "Kinda"
      },
      {
        id: 9,
        name: "Pat Matula",
        phone: "323-833-8956",
        notes: "Total",
        interestLevel: "Kinda"
      },
      {
        id: 10,
        name: "Faun Theuss",
        phone: "178-565-3698",
        notes: "next generation",
        interestLevel: "NotMuch"
      }
    ]
  };

  addStudent = e => {
    const student = {
      ...e,
      id: this.state.students.length + 1
    };
    let students = [...this.state.students, student];
    this.setState({
      students: students
    });
  };
  render() {
    return (
      <div>
        <Collapse>
          {this.state.students.map(student => (
            <Panel header={student.name} key={student.id}>
              <span>Contact: {student.phone}</span>
              <br></br>
              <span>Interest Level: {student.interestLevel}</span>
              <br></br>
              <span>Additional Notes: {student.notes}</span>
            </Panel>
          ))}
        </Collapse>
      </div>
    );
  }
}

export default StudentList;
