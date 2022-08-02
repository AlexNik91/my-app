import React from "react";
import {
  actionAddMessage,
  actionOnMessageChange,
} from "../../../redux/reducers/DialogsReducer";

import Messages from "./messages";

const MessagesContainer = (props) => {
  let addMessage = () => {
    props.dispatch(actionAddMessage());
  };
  let onMessageChange = (text) => {
    props.dispatch(actionOnMessageChange(text));
  };

  return (
    <Messages
      messageData={props.store.dialogState.messageData}
      addMessage={addMessage}
      onMessageChange={onMessageChange}
      addTextMessages={props.store.dialogState.newMessageText}
    />
  );
};
export default MessagesContainer;
