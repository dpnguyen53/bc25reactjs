import React, { Component } from 'react'

export default class TableDanhSachNguoiDung extends Component {
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
                    <tr>
                        <td>nguyenvana</td>
                        <td>*******</td>
                        <td>Nguyễn Văn A</td>
                        <td>Email@gmail.com</td>
                        <td>09090909</td>
                        <td>NguoiDung</td>
                        <td>
                            <button className='btn btn-primary'>Chỉnh sửa</button>
                            <button className='btn btn-danger ml-2'>Xoá</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}
