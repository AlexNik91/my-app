import React from "react";
import s from "./Dialogs.module.css";

import DialogsItems from "./DialogItem/DialogItem";
import Messages from "./messages/messages";

const Dialogs = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.dialogs}>
        <div className="dialogsItems">
          <DialogsItems dialogsData={props.state.dialogsData} />
        </div>

        <Messages
          messageData={props.state.messageData}
          addMessage={props.addMessage}
          newMessageText={props.state.newMessageText}
          messageChange={props.messageChange}
        />
      </div>
    </nav>
  );
};

export default Dialogs;
