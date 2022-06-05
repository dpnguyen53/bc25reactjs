import React, { Component } from "react";
import SanPham from "./san-pham";
import { connect } from "react-redux";

class DanhSachSanPham extends Component {
  renderListProduct = () => {
    return this.props.productList?.map((item) => {
      return (
        <SanPham
          key={item.maSP}
          product={item}
          // getDetail={this.props.getDetail}
          // getProductAddCart={this.props.getProductAddCart}
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

const mapStateToProps = (state) => {
  return {
    productList: state.shoppingReducer.productList,
  };
};

export default connect(mapStateToProps, null)(DanhSachSanPham);
