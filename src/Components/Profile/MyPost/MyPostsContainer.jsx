import React from "react";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  addPostChangeActionCreator,
} from "../../../redux/reducers/ProfileReducer";

const MyPostsContainer = (props) => {
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = addPostChangeActionCreator(text);
    props.dispatch(action);
  };
  return (
    <MyPosts
      postsData={props.store.postState.postsData}
      updateNewPostText={onPostChange}
      addPost={addPost}
      newPostText={props.store.postState.newPostText}
    />
  );
};

export default MyPostsContainer;
