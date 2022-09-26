import React from "react";
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
  let postElements = [...props.postsData]
    .reverse()
    .map((p) => <Post message={p.messages} id={p.id} like={p.lekesKount} />);

  let addNewPost = (value) => {
    props.addPost(value.addNewPostText);
  };

  return (
    <div>
      <ReduxPostForm onSubmit={addNewPost} />
      <div className={classes.item}>{postElements}</div>
    </div>
  );
});

export default MyPosts;
