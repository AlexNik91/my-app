import React from "react";
import s from "./Dialogs.module.css";

import DialogsItems from "./DialogItem/DialogItem";
import Messages from "./messages/messages";

const Dialogs = () => {
  return (
    <nav className={s.nav}>
      <div className={s.dialogs}>
        <DialogsItems />
        <Messages />
      </div>
    </nav>
  );
};

export default Dialogs;
