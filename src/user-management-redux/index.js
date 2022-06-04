import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./data.json";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: data,
      userEdit: null,
      keyword: "",
    };
  }

  _findIndex = (id) => {
    return this.state.userList.findIndex((user) => {
      return user.id === id;
    });
  };

  handleDeleteUser = (user) => {
    const index = this._findIndex(user.id);
    if (index !== -1) {
      //Xoa
      const userListClone = [...this.state.userList];
      userListClone.splice(index, 1);
      this.setState({
        userList: userListClone,
      });
    }
  };

  /**
   * Save user
   */
  saveUser = (user) => {
    let userList = [...this.state.userList];
    if (user.id) {
      //update
      const index = this._findIndex(user.id);
      if (index !== -1) {
        userList[index] = user;
      }
    } else {
      //add
      const userNew = { ...user, id: new Date().getTime() };
      userList = [...this.state.userList, userNew];
    }

    this.setState({
      userList,
    });
  };

  /**
   * Edit
   */
  handleUserEdit = (user) => {
    this.setState({
      userEdit: user,
    });
  };

  /**
   * Search
   */
  handleGetKeyword = (keyword) => {
    this.setState({
      keyword,
    });
  };

  render() {
    let { userList, keyword } = this.state;

    userList = userList.filter((user) => {
      return user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management Redux</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search getKeyword={this.handleGetKeyword} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.setState({
                userEdit: null,
              });
            }}
          >
            Add User
          </button>
        </div>
        <Users
        // userList={userList}
        // getUserDelete={this.handleDeleteUser}
        // getUserEdit={this.handleUserEdit}
        />
        <Modal
        // getUserSave={this.saveUser}
        // userEdit={this.state.userEdit}
        />
      </div>
    );
  }
}

export default Home;
