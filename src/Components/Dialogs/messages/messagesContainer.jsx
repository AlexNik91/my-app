import {
  addMessage,
  onMessageChange,
} from "../../../redux/reducers/DialogsReducer";
import { connect } from "react-redux";
import Messages from "./messages";

let mapStateToProps = (state) => {
  return {
    messageData: state.dialogState.messageData,
    newMessageText: state.dialogState.newMessageText,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     addMessage: () => {
//       dispatch(actionAddMessage());
//     },
//     onMessageChange: (text) => {
//       dispatch(actionOnMessageChange(text));
//     },
//   };
// };

const MessagesContainer = connect(mapStateToProps, {
  addMessage,
  onMessageChange,
})(Messages);

export default MessagesContainer;
