import React from "react";
import s from "./Dialogs.module.css";

import DialogsItems from "./DialogItem/DialogItem";

import MessagesContainer from "./messages/messagesContainer";

const Dialogs = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.dialogs}>
        <div className="dialogsItems">
          <DialogsItems dialogsData={props.store.dialogState.dialogsData} />
        </div>

        <MessagesContainer store={props.store} dispatch={props.dispatch} />
      </div>
    </nav>
  );
};

export default Dialogs;
