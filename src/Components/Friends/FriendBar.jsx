import React from "react";
import "./FriendBar.css";
import { NavLink } from "react-router-dom";

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
        <NavLink to={friendUser}>
          <div>{friendUser[0]}</div>
        </NavLink>
        <NavLink to={friendUser}>
          <div>{friendUser[1]}</div>
        </NavLink>
        <NavLink to={friendUser}>
          <div>{friendUser[2]}</div>
        </NavLink>
      </div>
    </nav>
  );
};
export default FriendImg;
