import React, { Component } from 'react'
import FormDangKy from './FormDangKy'
import TableDanhSachNguoiDung from './TableDanhSachNguoiDung'

export default class BaiTapForm extends Component {
  render() {
    return (
      <div className='container'>
        <FormDangKy />
        <TableDanhSachNguoiDung />

      </div>
    )
  }
}
