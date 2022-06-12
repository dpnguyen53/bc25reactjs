import React, { Component } from 'react'
import { connect } from 'react-redux'
class FormDangKy extends Component {

    state = {
        value: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDienThoai: '',
            hoTen: '',
            loaiNguoiDung: 'NguoiDung'
        },
        error: {
            taiKhoan: ' ',
            matKhau: ' ',
            email: ' ',
            soDienThoai: ' ',
            hoTen: ' ',
        }

    }

    handleChangeInput = (event) => {
        // debugger;
        //.target: Truy xuất ngược lại thẻ đang xảy ra sự kiện
        let { value, id } = event.target;
        // event.target['data-type']
        let type = event.target.getAttribute('data-type');
        let minLength = event.target.getAttribute('data-minlength');
        let maxLength = event.target.getAttribute('data-maxlength');

        // debugger;

        //Đưa giá trị this.state.value ra 1 biến
        let newValue = { ...this.state.value };
        newValue[id] = value;

        // debugger;
        //xử lý cho this.state.error
        let newError = { ...this.state.error };
        let messError = '';
        if (value.trim() === '') {
            messError = id + ' không được bỏ trống !';
        } else {
            if (type === 'emailType') {
                let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                if (!regexEmail.test(value)) {
                    //có dấu ! phủ định
                    messError = id + ' không đúng định dạng !';
                }
            }
            if (minLength) {
                if (value.length > maxLength || value.length < minLength) {
                    messError = `${id} từ ${minLength} - ${maxLength} ký tự !`;
                }
            }
        }

        newError[id] = messError;


        this.setState({
            value: newValue, //object literal - dynamic key
            error: newError
        }, () => {
            console.log(this.state);
        })
    }

    handleSubmit = (event) => {
        event.preventDefault(); //Hàm cản sự kiện reload lại trang        
        // console.log(this.state);
        //Check error có giá trị hay không (this.state.error)
        // //{
        //     taiKhoan: ' ',
        //     matKhau: ' ',
        //     email: ' ',
        //     soDienThoai: ' ',
        //     hoTen: 'họ tên không được bỏ trống',
        // }

        const { error } = this.state;
        for (let key in error) {
            if (error[key] !== '') {
                return;
            }
        }

        //không rơi vào if -> sẽ không dừng hàm
        // console.log('submit');
        const action = {
            type: 'THEM_NGUOI_DUNG',
            payload: this.state.value
        }
        //Đưa dữ liệu lên reducer (gửi tất cả reducer)
        this.props.dispatch(action);

    }

    // static getDerivedStateFromProps(newProps, currentState) {
    //     //Can thiệp vào quá trình trước khi render và sau khi props mới từ redux trả về
    //     //Lấy props mới thay đổi của redux gán vào state  tại vị trí náy
    //     if (newProps.nguoiDungSua.taiKhoan !== currentState.value.taiKhoan) {
    //         let newState = {
    //             ...currentState,
    //             value: newProps.nguoiDungSua
    //         }
    //         return newState;
    //     }
    //     return null;
    // }

    //Sử dụng lifecycle phiên bản cũ
    //Hàm này tương tự getDerivedStateFromProps: tuy nhiên state thay đổi thì không chạy. Chỉ chạy khi props thay đổi
    componentWillReceiveProps(newProps) { //Lifecycle này kích hoạt khi props của component thay đổi và trước khi render
        //Đem props gán vào state => giao diện binding từ state
        this.setState({
            value: newProps.nguoiDungSua
        })
    }

    render() {
        console.log(this.props);
        let { taiKhoan, matKhau, email, soDienThoai, loaiNguoiDung, hoTen } = this.state.value;
        return (
            <form className='card' onSubmit={this.handleSubmit}>
                <div className='card-header bg-dark text-white'>
                    <h3>Form đăng ký</h3>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Tài khoản</p>
                                <input id="taiKhoan" name="taiKhoan" className='form-control' onChange={this.handleChangeInput} value={taiKhoan} />
                                <p className='text-danger'>{this.state.error.taiKhoan}</p>
                            </div>
                            <div className='form-group'>
                                <p>Họ tên</p>
                                <input id="hoTen" name="hoTen" className='form-control' onChange={this.handleChangeInput} value={hoTen} />
                                <p className='text-danger'>{this.state.error.hoTen}</p>

                            </div>
                            <div className='form-group'>
                                <p>Email</p>
                                <input data-type={"emailType"} id="email" name="email" className='form-control' onChange={this.handleChangeInput} value={email} />
                                <p className='text-danger'>{this.state.error.email}</p>

                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Mật khẩu</p>
                                <input data-minlength="6" data-maxlength="32" id="matKhau" name="matKhau" className='form-control' type="password" onChange={this.handleChangeInput} value={matKhau} />
                                <p className='text-danger'>{this.state.error.matKhau}</p>

                            </div>
                            <div className='form-group'>
                                <p>Số điện thoại</p>
                                <input id="soDienThoai" name="soDienThoai" className='form-control' onChange={this.handleChangeInput} value={soDienThoai} />
                                <p className='text-danger'>{this.state.error.soDienThoai}</p>

                            </div>
                            <div className='form-group'>
                                <p>Loại người dùng</p>
                                <select value={loaiNguoiDung} className='form-control' id="loaiNguoiDung" name='loaiNguoiDung' onChange={this.handleChangeInput}> <option value="QuanTri">QuanTri</option> <option value="NguoiDung">NguoiDung</option> </select>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='card-footer'>
                    <button type='submit' className='btn btn-success'>Đăng ký</button>
                    <button className='btn btn-success ml-2' type='button' onClick={() => {
                        const action = {
                            type:'CAP_NHAT_NGUOI_DUNG',
                            payload: this.state.value
                        }
                        
                        this.props.dispatch(action);
                    }}>Cập nhật</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (rootReducer) => {

    return {
        nguoiDungSua: rootReducer.formReducer.nguoiDungSua
    }
}



export default connect(mapStateToProps)(FormDangKy);



