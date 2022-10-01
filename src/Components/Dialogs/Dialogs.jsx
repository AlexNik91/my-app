import React from "react";
import s from "./Dialogs.module.css";

import DialogsItems from "./DialogItem/DialogItem";

import DialogsContainer from "./DialogItem/DialogsUserContainer";

const Dialogs = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.dialogs}>
        <div className="dialogsItems">
          <DialogsItems dialogsData={props.store.dialogState.dialogsData} />
        </div>

        <DialogsContainer />
      </div>
    </nav>
  );
};

export default Dialogs;
