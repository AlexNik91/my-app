import React from "react";
import Post from "./Posts/Post";
import classes from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postElements = props.postsData.map((p) => (
    <Post message={p.messages} id={p.id} like={p.lekesKount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };
  return (
    <div className={classes.block}>
      <h3>My Posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        {" "}
        <button onClick={addPost}>add post</button>
      </div>
      <div className={classes.item}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
