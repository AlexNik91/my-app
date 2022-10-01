import { addMessage } from "../../../redux/reducers/DialogsReducer";
import { connect } from "react-redux";
import DialogsMessage from "./DialogsUser";

import { AuthHoc } from "./../../../hoc/AuthNavigate";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    messageData: state.dialogState.messageData,
    newMessageText: state.dialogState.newMessageText,
  };
};

export default compose(
  AuthHoc,
  connect(mapStateToProps, {
    addMessage,
  })
)(DialogsMessage);
