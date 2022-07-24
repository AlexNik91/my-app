import React from "react";
import item from "./messages.module.css";

const Message = (props) => {
  return (
    <div className={item.message}>
      {props.message}
      <div className={item.addMessage}>
        <div>
          <textarea cols="40" rows="1"></textarea>
        </div>
        <div>
          <button>add</button>
        </div>
      </div>
    </div>
  );
};

const Messages = (props) => {
  let messagArray = props.messageData.map((m) => (
    <Message message={m.message} />
  ));
  return <div className={item.messages}>{messagArray}</div>;
};

export default Messages;
