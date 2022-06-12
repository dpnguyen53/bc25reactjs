import React, { Component } from 'react'
import {connect} from 'react-redux'

 class TableDanhSachNguoiDung extends Component {
  render() {
    return (
      <div className='card'>
        <div className='card-header bg-dark text-white'>
            <h3>Table người dùng</h3>
        </div>
        <div className='card-body'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Tài khoản</th>
                        <th>Mật khẩu</th>
                        <th>Họ tên</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Loại người dùng</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.mangNguoiDung.map((nd,index)=>{
                        return <tr key={index}>
                        <td>{nd.taiKhoan}</td>
                        <td>{nd.matKhau}</td>
                        <td>{nd.hoTen}</td>
                        <td>{nd.email}</td>
                        <td>{nd.soDienThoai}</td>
                        <td>{nd.loaiNguoiDung}</td>
                        <td>
                            <button className='btn btn-primary' onClick={()=>{
                                //Đưa dữ liệu lên redux thay đổi cho state.nguoiDungSua của formReducer
                                const action = {
                                    type:'SUA_NGUOI_DUNG',
                                    payload: nd
                                }
                                this.props.dispatch(action);

                            }}>Chỉnh sửa</button>
                            <button className='btn btn-danger ml-2' onClick={() =>{
                                const action = {
                                    type:'XOA_NGUOI_DUNG',
                                    payload:nd.taiKhoan
                                }
                                //Đưa dữ liệu lên reducer
                                this.props.dispatch(action);
                                
                            }}>Xoá</button>
                        </td>
                    </tr>
                    })}
                    
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (rootReducer) => {

    return {
        mangNguoiDung: rootReducer.formReducer.mangNguoiDung
    }
}

export default connect(mapStateToProps)(TableDanhSachNguoiDung);
