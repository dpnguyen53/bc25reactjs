import React, { Component } from "react";

export default class ExampleCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "./img/imgBlackCar.jpg",
    };
  }

  changeColor = (img) => {
    this.setState({
      img,
    });
  };

  render() {
    const { img } = this.state;
    return (
      <div className="container">
        <h3>ExampleCar</h3>
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={img} alt="" />
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-dark"
              onClick={() => {
                this.changeColor("./img/imgBlackCar.jpg");
              }}
            >
              Black
            </button>
            <button
              className="btn btn-light mx-2"
              onClick={() => this.changeColor("./img/imgSilverCar.jpg")}
            >
              Silver
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.changeColor("./img/imgRedCar.jpg")}
            >
              Red
            </button>
          </div>
        </div>
      </div>
    );
  }
}
