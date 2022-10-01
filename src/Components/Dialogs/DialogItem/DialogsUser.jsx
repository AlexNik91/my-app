import React, { useState } from "react";
import Message from "../messageItem/messageItem";

import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../commen/commenFile/Formscontrols/FormsControl";
import {
  minLengthCreator,
  maxLengthCreator,
} from "../../../utils/validators/validators";

const addDialogForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          onClick={props.addNewDialogs}
          onChange={(event) => props.setNewDialogs(event.target.value)}
          value={props.newDialog}
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
})(addDialogForm);

const DialogsMessage = (props) => {
  const [message, setMessage] = useState(props.messageData);
  const [newDialog, setNewDialogs] = useState("");

  let messagArray = message.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let addNewDialogs = () => {
    setMessage([...message, { id: Date.now(), message: newDialog }]);
  };
  // const onSubmit = (formData) => {
  //   console.log(formData);
  /// };

  return (
    <div>
      <div> {messagArray}</div>
      <ReduxMessageForm
        onSubmit={addNewDialogs}
        setNewDialogs={setNewDialogs}
        newDialog={newDialog}
      />
    </div>
  );
};

export default DialogsMessage;
