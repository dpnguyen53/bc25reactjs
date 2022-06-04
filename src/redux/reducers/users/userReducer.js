const initialState = {
  userList: [
    {
      id: 1,
      fullname: "Dinh Phuc Nguyen",
      username: "dpnguyen",
      email: "dpnguyen@gmail.com",
      phoneNumber: "123456789",
      type: "VIP",
    },
    {
      id: 2,
      fullname: "Nguyen Van A",
      username: "vana",
      email: "vana@gmail.com",
      phoneNumber: "123456789",
      type: "USER",
    },
  ],
  userEdit: null,
  keyword: "",
};

const userReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "DELETE_USER": {
      //Xoa user
      //clone array
      const userList = [...state.userList];
      //findIndex
      const index = userList.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        //remove
        userList.splice(index, 1);
      }
      //cập nhật lại state
      state.userList = userList;

      //trả về state mới
      return { ...state };
    }

    case "SAVE_USER": {
      const userList = [...state.userList];
      if (action.payload.id) {
        //update
      } else {
        //add
        const userNew = { ...action.payload, id: new Date().getTime() };
        userList.push(userNew);
      }

      state.userList = userList;

      return { ...state };
    }

    case "EDIT_USER": {
      state.userEdit = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default userReducer;
