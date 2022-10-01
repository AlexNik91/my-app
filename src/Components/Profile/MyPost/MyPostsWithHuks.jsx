import React, { useState } from "react";
import Post from "./Posts/Post";
import classes from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  minLengthCreator,
} from "../../../utils/validators/validators";
import { Textarea } from "../../commen/commenFile/Formscontrols/FormsControl";

const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.block}>
        <h3>My Posts</h3>

        <Field
          onClick={props.addNewPost}
          onChange={(event) => props.setNewPostText(event.target.value)}
          value={props.newPostText}
          placeholder="Post message"
          component={Textarea}
          name={"addNewPostText"}
          validate={[maxLengthCreator(200), minLengthCreator(3)]}
        />
      </div>
      <div>
        <button>add post</button>
      </div>
    </form>
  );
};

const ReduxPostForm = reduxForm({
  form: "MyPosts",
})(MyPostForm);

const MyPosts = React.memo((props) => {
  const [newPost, setNewPost] = useState(props.postsData);
  const [newPostText, setNewPostText] = useState("");

  let postElements = newPost.map((p) => (
    <Post message={p.messages} id={p.id} like={p.lekesKount} />
  ));

  let addNewPost = () => {
    setNewPost([
      ...newPost,
      {
        id: Date.now(),
        messages: newPostText,
        lekesKount: 0,
      },
    ]);
  };

  return (
    <div>
      <ReduxPostForm
        onSubmit={addNewPost}
        newPostText={newPostText}
        setNewPostText={setNewPostText}
      />
      <div className={classes.item}>{postElements}</div>
    </div>
  );
});

export default MyPosts;
