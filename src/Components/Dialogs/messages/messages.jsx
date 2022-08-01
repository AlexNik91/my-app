import React from "react";
import { actionAddMessage, actionOnMessageChange } from "../../../redux/State";

import Message from "../messageItem/messageItem";
import item from "./messages.module.css";

const Messages = (props) => {
  let messagArray = props.messageData.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  let addTextMessages = React.createRef();

  let addMessage = () => {
    // props.addMessage();
    props.dispatch(actionAddMessage());
  };
  let onMessageChange = () => {
    let text = addTextMessages.current.value;
    props.dispatch(actionOnMessageChange(text));
  };

  return (
    <div>
      <div>
        <textarea
          onChange={onMessageChange}
          ref={addTextMessages}
          value={props.newMessageText}
          cols="40"
          rows="1"
        />
      </div>
      <div>
        <button onClick={addMessage}>add</button>
      </div>
      <div className={item.messages}>{messagArray}</div>
    </div>
  );
};
export default Messages;
