import React from "react";

import { NavLink } from "react-router-dom";
import "./dialogs1.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className="dialogs12">
      <NavLink to={path} style={{ textDecoration: "none" }}>
        <div className="dialogs12">
          <img src={props.img} />
          {props.name}
        </div>
      </NavLink>
    </div>
  );
};

const DialogsItems = (props) => {
  let dialogsUser = props.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />
  ));

  return (
    <nav className="">
      <div className="dialogsItems">
        <div>{dialogsUser}</div>
      </div>
    </nav>
  );
};

export default DialogsItems;
