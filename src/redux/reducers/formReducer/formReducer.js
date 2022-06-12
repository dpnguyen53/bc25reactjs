


const stateDefault = {
    mangNguoiDung: [
        { taiKhoan: 'nguyenvana', hoTen: 'Nguyễn Văn A', matKhau: '123', email: 'nguyenvana@gmail.com', soDienThoai: '09090909', loaiNguoiDung: 'NguoiDung' },
        { taiKhoan: 'nguyenvanb', hoTen: 'Nguyễn Văn B', matKhau: '123', email: 'nguyenvanb@gmail.com', soDienThoai: '080808', loaiNguoiDung: 'QuanTri' },
    ],

    nguoiDungSua: {
        taiKhoan: 'nguyenvanb',
        hoTen: 'Nguyễn Văn B',
        matKhau: '123',
        email: 'nguyenvanb@gmail.com',
        soDienThoai: '080808',
        loaiNguoiDung: 'QuanTri'
    }
}

export const formReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'THEM_NGUOI_DUNG': {
            state.mangNguoiDung = [...state.mangNguoiDung, action.payload];

            return { ...state };
        }
        case 'XOA_NGUOI_DUNG': {
            let mangNguoiDungUpdate = [...state.mangNguoiDung];
            mangNguoiDungUpdate = mangNguoiDungUpdate.filter(nd => nd.taiKhoan !== action.payload);
            //Cập nhật lại state.mangNguoiDung
            state.mangNguoiDung = mangNguoiDungUpdate;
            return { ...state };

        }
        case 'SUA_NGUOI_DUNG':{
            state.nguoiDungSua = action.payload;
            return {...state};
        }

        case 'CAP_NHAT_NGUOI_DUNG': {
            //Lấy ra người dùng trong mảng cập nhật = người dùng gửi lên
            let mangNguoiDungUpdate = [...state.mangNguoiDung];

            //Lấy ra người ở trong mangNguoiDung dựa vào thuộc tính tài khoản của dữ liệu người dispatch lên (action.payload => dữ liệu lấy từ form)
            let nguoiDungUpdate = mangNguoiDungUpdate.find(nd => nd.taiKhoan === action.payload.taiKhoan);
            //Nếu tim thấy thì lấy tất cả thuộc tính của người dùng trong mảng gán = giá trị người dùng gửi lên (Dùng for in để duyệt thuộc tính)
            if(nguoiDungUpdate){
                for(let key in nguoiDungUpdate) {
                    nguoiDungUpdate[key] = action.payload[key];
                }
            }

            //Cập nhật lại state.mangNguoiDung
            state.mangNguoiDung = mangNguoiDungUpdate;
            return {...state};
        }
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
