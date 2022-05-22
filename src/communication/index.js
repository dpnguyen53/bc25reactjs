import React, { Component } from "react";
import Child from "./child";
import ChildFnc from "./childFnc";
import Children from "./children";

export default class Communication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Cybersoft",
      age: 5,
    };
  }

  handleChangeUsername = () => {
    this.setState({
      username: "Nguyen",
    });
  };

  resetUsername = (username) => {
    //Đây là phương thức nhận dữ liệu từ component con truyền ra
    this.setState({
      username,
    });
  };

  render() {
    const { username, age } = this.state;
    return (
      <div>
        <h3>*Communication</h3>
        <p>
          Username: {username} - Age: {age}
        </p>
        <button className="btn btn-success" onClick={this.handleChangeUsername}>
          Change username
        </button>
        <Child username={username} age={age} getUsername={this.resetUsername} />
        <ChildFnc username={username} age={age} />
        <Children>
          <p>
            Username: {username} - Age: {age}
          </p>
        </Children>
      </div>
    );
  }
}
