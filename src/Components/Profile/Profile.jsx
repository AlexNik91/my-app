import React from "react";

import MyPosts from "./MyPost/MyPosts";
import ProfileInfo1 from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo1 />

      <MyPosts
        postsData={props.state.postsData}
        newPostText={props.state.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
