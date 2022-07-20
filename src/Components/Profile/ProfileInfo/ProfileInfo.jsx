import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo1 = () => {
  return (
    <div>
      <div>
        <img src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg" />
      </div>
      <div className={s.ava}>ava + descriptions</div>
    </div>
  );
};

export default ProfileInfo1;
