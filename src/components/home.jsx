import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-scroll";

class Homepage extends Component {
  state = {
    current: "mail"
  };
  render() {
    return (
      <React.Fragment>
        <div className="homemenu" id="about">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item>
              <Link
                activeClass="active"
                to="abouat"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <Icon type="build" />
                About
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                activeClass="active"
                to="view"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <Icon type="apple" /> View
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              ></Link>
              <Icon type="contacts" spin />
              Contact
            </Menu.Item>
          </Menu>
        </div>

        <div className="intro"></div>
        <div className="home1" id="abouat">
          <h1>Tea Tool</h1>
        </div>
        <div className="home2" id="view">
          <h1>Red Red Hello</h1>
          <h1>Above Foot</h1>
          <footer>Yolo</footer>
        </div>
        <div className="home3" id="contact">
          <h1>Hello Contact</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Homepage;
