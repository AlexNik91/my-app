import React from "react";
import "./FriendBar.css";

const FriendItem = (props) => {
  return (
    <div className="inLine">
      <img src={props.img}></img>
      {props.name}
    </div>
  );
};

const FriendImg = (props) => {
  let friendUser = props.imgData.map((dialog) => (
    <FriendItem img={dialog.img} name={dialog.name} />
  ));

  return (
    <nav className="">
      <div className="dialogsItems">
        <div>{friendUser}</div>
      </div>
    </nav>
  );
};
export default FriendImg;
