import React from "react";

import MyPostsContainer from "./MyPost/MyPostsContainer";
import ProfileInfo1 from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo1 />

      <MyPostsContainer />
    </div>
  );
};

export default Profile;
