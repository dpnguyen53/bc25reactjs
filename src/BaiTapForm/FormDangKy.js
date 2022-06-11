import React, { Component } from 'react'

export default class FormDangKy extends Component {

    state = {
        taiKhoan: '',
        matKhau: '',
        email: '',
        soDienThoai: '',
        hoTen: '',
        loaiNguoiDung: 'NguoiDung'
    }

    handleChangeInput = (event) => {
        // debugger;
        //.target: Truy xuất ngược lại thẻ đang xảy ra sự kiện
        let value = event.target.value;
        let id = event.target.id;
        // console.log(id,taiKhoan);
        this.setState({
            [id]: value //object literal - dynamic key
        }, () => {
            console.log(this.state);
        })
    }

    render() {
        return (
            <form className='card' onSubmit={(event) => {
                event.preventDefault(); //Hàm cản sự kiện reload lại trang        
                console.log(this.state);
            }}>
                <div className='card-header bg-dark text-white'>
                    <h3>Form đăng ký</h3>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Tài khoản</p>
                                <input id="taiKhoan" name="taiKhoan" className='form-control' onChange={this.handleChangeInput} />
                            </div>
                            <div className='form-group'>
                                <p>Họ tên</p>
                                <input id="hoTen" name="hoTen" className='form-control' onChange={this.handleChangeInput}/>
                            </div>
                            <div className='form-group'>
                                <p>Email</p>
                                <input id="email" name="email" className='form-control' onChange={this.handleChangeInput} />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Mật khẩu</p>
                                <input id="matKhau" name="matKhau" className='form-control' type="password" onChange={this.handleChangeInput} />
                            </div>
                            <div className='form-group'>
                                <p>Số điện thoại</p>
                                <input id="soDienThoai" name="soDienThoai" className='form-control' onChange={this.handleChangeInput}/>
                            </div>
                            <div className='form-group'>
                                <p>Loại người dùng</p>
                                <select className='form-control' id="loaiNguoiDung" name='loaiNguoiDung' onChange={this.handleChangeInput}> <option value="QuanTri">QuanTri</option> <option value="NguoiDung">NguoiDung</option> </select>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='card-footer'>
                    <button type='submit' className='btn btn-success'>Đăng ký</button>
                    <button className='btn btn-success ml-2' type='button'>Cập nhật</button>
                </div>
            </form>
        )
    }
}

