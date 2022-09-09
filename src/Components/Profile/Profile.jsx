import React from "react";

import MyPostsContainer from "./MyPost/MyPostsContainer";
import ProfileInfo1 from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo1
        profile={props.profile}
        isAuth={props.isAuth}
        status={props.status}
        updateStatus={props.updateStatus}
      />

      <MyPostsContainer />
    </div>
  );
};

export default Profile;
