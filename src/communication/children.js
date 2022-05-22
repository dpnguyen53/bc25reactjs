import React, { Component } from "react";

export default class Children extends Component {
  render() {
    return (
      <div>
        <h3>*Children</h3>
        {this.props.children}
      </div>
    );
  }
}
