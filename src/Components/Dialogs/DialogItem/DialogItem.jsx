import React from "react";
import s from "./DialogsItems.module.css";
import { NavLink } from "react-router-dom";
import "./dialogs1.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className="dialogs">
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const DialogsItems = (props) => {
  let dialogsData = [
    { id: 1, name: "PeT9" },
    { id: 2, name: "San9" },
    { id: 3, name: "Van9" },
    { id: 4, name: "Tan9" },
    { id: 5, name: "Gal9" },
    { id: 6, name: "Ol9" },
  ];
  return (
    <nav className={s.nav}>
      <div className="dialogsItems">
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name="Tan9" id="3" />
        <DialogItem name="Gal9" id="4" />
        <DialogItem name="An9" id="5" />
        <DialogItem name="Gal9" id="6" />
      </div>
    </nav>
  );
};

export default DialogsItems;
