import React from "react";
import classes from "./Post.module.css";
import { NavLink } from "react-router-dom";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" />
      {props.message}

      <div>
        <button className="Button">
          <span>like</span>
        </button>

        {props.like}
      </div>
      <br />
    </div>
  );
};

export default Post;
