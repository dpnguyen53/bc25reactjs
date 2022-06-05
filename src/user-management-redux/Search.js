import React, { Component } from "react";
import { connect } from "react-redux";
import { getKeyword } from "./../redux/actions/user";

class Search extends Component {
  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
        onChange={(event) => {
          this.props.getKeyword(event.target.value);
        }}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getKeyword: (keyword) => {
      dispatch(getKeyword(keyword));
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
