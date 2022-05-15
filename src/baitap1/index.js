import React, { Component } from "react";
import Header from "./header";
import Navigation from "./navigation";
import Content from "./content";
import Footer from "./footer";

class Baitap1 extends Component {
  render() {
    //render HTML ra ben ngoai UI
    return (
      <div>
        <Header />
        <div className="contents">
          <Navigation />
          <Content />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Baitap1;
