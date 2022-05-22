import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {
  renderListProduct = () => {
    return this.props.productList.map((item) => {
      return (
        <SanPham
          key={item.maSP}
          product={item}
          getDetail={this.props.getDetail}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderListProduct()}</div>
      </div>
    );
  }
}
