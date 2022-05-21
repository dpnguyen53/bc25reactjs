import React, { Component } from "react";
import data from "./data.json";

export default class ExampleListKeys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMovie: data,
    };
  }

  renderListMovie = () => {
    const { listMovie } = this.state;

    const listMovieNew = listMovie.map((item) => {
      return (
        <div className="col-md-4" key={item.maPhim}>
          <div className="card">
            <img className="card-img-top" src={item.hinhAnh} alt="" />
            <div className="card-body">
              <h4 className="card-title">{item.tenPhim}</h4>
              <p className="card-text">{item.moTa}</p>
            </div>
          </div>
        </div>
      );
    });

    return listMovieNew;
  };

  render() {
    return (
      <div className="container">
        <h3>*ExampleListKeys</h3>
        <div className="row">{this.renderListMovie()}</div>
      </div>
    );
  }
}
