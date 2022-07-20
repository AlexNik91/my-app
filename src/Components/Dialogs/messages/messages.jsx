import React from "react";
import item from "./messages.module.css";

const Message = (props) => {
  return <div className={item.message}>{props.message}</div>;
};

const Messages = (props) => {
  let messageData = [
    { id: 1, message: "Hi PeT9" },
    { id: 2, message: "Hi San9" },
    { id: 3, message: "Hi Van9" },
    { id: 4, message: "Hi Tan9" },
    { id: 5, message: "Hi Gal9" },
    { id: 6, message: "Hi Ol9" },
  ];
  return (
    <div className={item.messages}>
      <Message message={messageData[0].message} id={messageData[0].id} />
      <Message message={messageData[1].message} id={messageData[1].id} />
      <Message message={messageData[2].message} id={messageData[2].id} />
      <Message message={messageData[3].message} id={messageData[3].id} />
      <Message message={messageData[4].message} id={messageData[4].id} />
    </div>
  );
};

export default Messages;
