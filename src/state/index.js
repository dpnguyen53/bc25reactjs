import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);

    //Tạo ra state
    this.state = {
      isLogin: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLogin: true,
    });
  };

  renderHTML() {
    return this.state.isLogin ? (
      <div>
        <h2>Xin chao username</h2>
        <button className="btn btn-danger">Logout</button>
      </div>
    ) : (
      <button className="btn btn-success" onClick={this.handleLogin}>
        Login
      </button>
    );

    // if (this.isLogin) {
    //   return (
    //     <div>
    //       <h2>Xin chao username</h2>
    //       <button className="btn btn-danger">Logout</button>
    //     </div>
    //   );
    // } else {
    //   return <button className="btn btn-success">Login</button>;
    // }
  }

  render() {
    console.log("render");
    return (
      <div>
        <h3>*State</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
