import React from "react";
import Post from "./Posts/Post";
import classes from "./MyPosts.module.css";

const MyPosts = () => {
  let postsData = [
    { lekesKount: 11, id: 1, messages: "Its my first post" },
    { lekesKount: 12, id: 2, messages: "Its my new post" },
    { lekesKount: 3, id: 3, messages: "Its my next post" },
    { lekesKount: 4, id: 4, messages: "Its my thers post" },
    { lekesKount: 1, id: 5, messages: "Its my big post" },
    { lekesKount: 7, id: 6, messages: "Its my bang post" },
  ];
  return (
    <div className={classes.block}>
      <h3>My Posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        {" "}
        <button>add post</button>
      </div>
      <div className={classes.item}>
        <Post
          message={postsData[0].messages}
          id={postsData[0].id}
          like={postsData[0].lekesKount}
        />

        <Post
          message={postsData[1].messages}
          id={postsData[1].id}
          like={postsData[1].lekesKount}
        />
        <Post
          message={postsData[2].messages}
          id={postsData[2].id}
          like={postsData[2].lekesKount}
        />
      </div>
    </div>
  );
};

export default MyPosts;
