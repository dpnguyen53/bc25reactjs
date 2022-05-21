import React, { Component } from "react";

export default class ListKeys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        { id: 1, username: "Nguyen", age: 18 },
        { id: 2, username: "Man", age: 24 },
        { id: 3, username: "Dung", age: 21 },
      ],
    };
  }

  renderUserList = () => {
    const { userList } = this.state;
    const userListNew = userList.map((item) => {
      return (
        <li key={item.id}>
          Ten: {item.username} - Tuoi: {item.age}
        </li>
      );
    });

    return userListNew;
  };

  render() {
    return (
      <div>
        <h3>*ListKeys</h3>
        <ul>
          {this.renderUserList()}
          {/* {this.state.userList.map((item) => {
            return (
              <li key={item.id}>
                Ten: {item.username} - Tuoi: {item.age}
              </li>
            );
          })} */}

          {/* <li>Ten: Nguyen - tuoi: 18</li>
          <li>Ten: Man - tuoi: 24</li>
          <li>Ten: Dung - tuoi: 21</li> */}
        </ul>
      </div>
    );
  }
}
