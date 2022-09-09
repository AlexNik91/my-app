import React from "react";
import IsLoader from "../../commen/commenFile/loader";
import s from "./ProfileInfo.module.css";
import userPhoto from "./../../commen/images/images.png";
import ProfileStatus from "./StatusProfile";

const ProfileInfo1 = (props) => {
  if (!props.profile) return <IsLoader />;
  return (
    <div>
      {/* <div>
        <img src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg" />
      </div> */}
      <div className={s.ava}>
        <img
          src={
            props.profile.photos.large != null
              ? props.profile.photos.large
              : userPhoto
          }
        />

        <div>
          <ProfileStatus
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>

        <div>{props.profile.fullName}</div>
        <div>{props.profile.contacts.vk}</div>
      </div>
    </div>
  );
};

export default ProfileInfo1;
