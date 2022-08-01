import React from "react";
import Post from "./Posts/Post";
import classes from "./MyPosts.module.css";
import {
  addPostActionCreator,
  addPostChangeActionCreator,
} from "../../../redux/State";

const MyPosts = (props) => {
  let postElements = props.postsData.map((p) => (
    <Post message={p.messages} id={p.id} like={p.lekesKount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    // props.addPost();
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    props.dispatch(addPostChangeActionCreator(text));
  };

  return (
    <div className={classes.block}>
      <h3>My Posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
      </div>
      <div>
        <button onClick={addPost}>add post</button>
      </div>
      <div className={classes.item}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
