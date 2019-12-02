import React, { Component } from "react";
import REACTDOM from "react-dom";
import { Router, Route } from "react-router";
import "./teachersProfile.css";
import { Grid, Cell } from "react-mdl";
import Toggle from "./toggle";
import backGroundButton from "./backGround";

export default class Teacher extends Component {
  state = {
    // render: false,
  };
  add = () => {
    this.setState({ render: !this.state.render });
  };
  render() {
    let TagsInput = props => {
      const [tags, setTags] = React.useState(["Node", "What"]);
      const removeTags = indexToRemove => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
      };
    };

    let addTags = event => {
      if (event.target.value !== "") {
        setTags([...tags, event.target.value]);
        props.selected([...Tags, event.target.value]);
        event.target.value = "";
      }
    };

    // const {render, form: {course, section, number}} = this.state

    //  let {backGround} = this.props;
    return (
      <div
        className="teacher"
        style={{ width: "100%", height: "100%", margin: "auto" }}
      >
        <Grid className="teacher-grid">
          <Cell col={12}>
            <img
              src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
              alt="teacher"
              className="teacher-Avatar"
            />
            <div className="banner-text">
              <h2>Pantego elementary school</h2>
              {this.state.render && <backGround />}
              <backGroundButton addTrip={this.addbackGround} />
              <button onClick={() => this.backGround()}>My background</button>
            </div>
            <div className="toggle">
              {" "}
              <Toggle></Toggle>{" "}
            </div>
            <div
              id="addclass"
              className="add_class"
              style={{ display: "flex" }}
            >
              <button>Add Class</button>
            </div>
            <div className="tags-input">
              <ul>
                <li>
                  <span>Tag1</span>
                  <i
                    className="material-icons"
                    onClick={() => removeTags(index)}
                  >
                    close
                  </i>
                </li>
                <li>tag2</li>
              </ul>
              <input
                type="text"
                placeholder="Enter the tag you want to import"
                //onKeyUp = {e.key === "Enter" ? addTags(e): null}
              />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

//ReactDOM.render(<Teacher/>,document.getElementById("background"))
