


const stateDefault = {
    mangNguoiDung: [
        { taiKhoan: 'nguyenvana',hoTen:'Nguyễn Văn A', matKhau: '123', email: 'nguyenvana@gmail.com', soDienThoai: '09090909', loaiNguoiDung: 'NguoiDung' },
        { taiKhoan: 'nguyenvanb',hoTen:'Nguyễn Văn B', matKhau: '123', email: 'nguyenvanb@gmail.com', soDienThoai: '080808', loaiNguoiDung: 'QuanTri' },
    ]
}

export const formReducer = (state = stateDefault, action) => {
    switch (action.type) {

        default: return state;
    }
}




// const initialState = {}

// export default (state = initialState, { type, payload }) => {
//   switch (type) {

//   case first:
//     return { ...state, ...payload }

//   default:
//     return state
//   }
// }
