import {
  addMessage,
  onMessageChange,
} from "../../../redux/reducers/DialogsReducer";
import { connect } from "react-redux";
import Messages from "./messages";

import { AuthHoc } from "./../../../hoc/AuthNavigate";
import { compose } from "redux";

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
// let AuthNavigateComponent = AuthHoc(Messages);
// const MessagesContainer = connect(mapStateToProps, {
//   addMessage,
//   onMessageChange,
// })(AuthNavigateComponent);

// export default MessagesContainer;

export default compose(
  AuthHoc,
  connect(mapStateToProps, {
    addMessage,
    onMessageChange,
  })
)(Messages);
