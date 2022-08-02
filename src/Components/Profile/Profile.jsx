import React from "react";

import MyPosts from "./MyPost/MyPosts";
import MyPostsContainer from "./MyPost/MyPostsContainer";
import ProfileInfo1 from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo1 />

      <MyPostsContainer store={props.store} dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
