import React from "react";
import Message from "../messageItem/messageItem";
import item from "./messages.module.css";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../commen/commenFile/Formscontrols/FormsControl";
import {
  minLengthCreator,
  maxLengthCreator,
} from "../../../utils/validators/validators";

const addMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="messages"
          component={Textarea}
          name="newMessageText"
          validate={[minLengthCreator(2), maxLengthCreator(200)]}
        />
      </div>
      <div>
        <button>add</button>
      </div>
    </form>
  );
};

const ReduxMessageForm = reduxForm({
  form: "messageForm",
})(addMessageForm);

const Messages = (props) => {
  let messagArray = props.messageData.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let addNewMessage = (values) => {
    props.addMessage(values.newMessageText);
  };
  // const onSubmit = (formData) => {
  //   console.log(formData);
  /// };

  return (
    <div>
      <div className={item.messages}>{messagArray}</div>
      <ReduxMessageForm onSubmit={addNewMessage} />
    </div>
  );
};

export default Messages;
