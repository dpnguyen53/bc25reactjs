import React from "react";

export default function ChildFnc(props) {
  return (
    <div>
      <h3>*ChildFnc</h3>
      <p>
        Username: {props.username} - Age: {props.age}
      </p>
    </div>
  );
}
