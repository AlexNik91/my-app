import React from "react";
import IsLoader from "../../commen/commenFile/loader";
import s from "./ProfileInfo.module.css";
import userPhoto from "./../../commen/images/images.png";
import ProfileStatusWhisHooks from "./StatusProfileWhisHooks";

const ProfileInfo1 = (props) => {
  let user = props.profile;
  if (!user) return <IsLoader />;
  return (
    <div>
      {/* <div>
        <img src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg" />
      </div> */}
      <div className={s.ava}>
        <img src={user.photos.large != null ? user.photos.large : userPhoto} />

        <div>
          <ProfileStatusWhisHooks
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>

        <div>{user.fullName}</div>
        <div>{user.contacts.vk}</div>
      </div>
    </div>
  );
};

export default ProfileInfo1;
