import MyPosts from "./MyPosts";
import {
  addPost,
  updateNewPostText,
} from "../../../redux/reducers/ProfileReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    postsData: state.postState.postsData,
    newPostText: state.postState.newPostText,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     addPost: () => {
//       dispatch(addPostActionCreator());
//     },

//     updateNewPostText: (text) => {
//       dispatch(addPostChangeActionCreator(text));
//     },
//   };
// };

const MyPostContainer = connect(mapStateToProps, {
  addPost,
  updateNewPostText,
})(MyPosts);

export default MyPostContainer;
