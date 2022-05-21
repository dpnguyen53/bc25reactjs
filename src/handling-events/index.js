import React, { Component } from "react";

export default class HandlingEvents extends Component {
  handlingEvent() {
    console.log("handlingEvent");
  }

  handlingEventParams(username, age) {
    console.log(username, age);
  }

  render() {
    return (
      <div>
        <h3>*HandlingEvents</h3>
        <button className="btn btn-success" onClick={this.handlingEvent}>
          Handling Events
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.handlingEventParams("Cybersoft", 18);
          }}
        >
          Handling Events Params
        </button>
      </div>
    );
  }
}
