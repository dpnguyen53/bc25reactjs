import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: data,
      detailProduct: data[0],
      listCart: [],
    };
  }

  handleDetailProduct = (product) => {
    this.setState({
      detailProduct: product,
    });
  };

  _findIndex = (maSP) =>
    this.state.listCart.findIndex((item) => item.maSP === maSP);

  /**
   * Add & Update Product Cart
   */
  handleAddCart = (product) => {
    //clone listCart
    const listCartClone = [...this.state.listCart];

    //Tim kiem product co ton tai trong state.listCart?
    const index = this._findIndex(product.maSP);

    if (index !== -1) {
      //update
      listCartClone[index].soLuong += 1;
    } else {
      //add
      const productNew = {
        maSP: product.maSP,
        tenSP: product.tenSP,
        hinhAnh: product.hinhAnh,
        soLuong: 1,
        donGia: product.giaBan,
      };

      listCartClone.push(productNew);
    }

    this.setState({
      listCart: listCartClone,
    });
  };

  /**
   * Delete Product Cart
   */
  handleDeleteProduct = (product) => {
    const index = this._findIndex(product.maSP);
    if (index !== -1) {
      //Xoa product trong state.listCart
      const listCartClone = [...this.state.listCart];
      listCartClone.splice(index, 1);

      this.setState({
        listCart: listCartClone,
      });
    }
  };

  /**
   * Tang giam SL
   */
  handleTangGiamSL = (status, product) => {
    const listCartClone = [...this.state.listCart];
    const index = this._findIndex(product.maSP);

    if (index !== -1) {
      if (status) {
        //tang
        listCartClone[index].soLuong += 1;
      } else {
        //giam
        if (listCartClone[index].soLuong > 1) {
          listCartClone[index].soLuong -= 1;
        }
      }
      this.setState({
        listCart: listCartClone,
      });
    }
  };

  totalQuantity = () => {
    return this.state.listCart.reduce((total, item) => {
      return (total += item.soLuong);
    }, 0);
  };

  render() {
    const { productList, detailProduct, listCart } = this.state;
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.totalQuantity()})
          </button>
        </div>
        <DanhSachSanPham
          productList={productList}
          getDetail={this.handleDetailProduct}
          getProductAddCart={this.handleAddCart}
        />
        <Modal
          listCart={listCart}
          getProductDeleteCart={this.handleDeleteProduct}
          getProductQuantity={this.handleTangGiamSL}
        />
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={detailProduct.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{detailProduct.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{detailProduct.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
