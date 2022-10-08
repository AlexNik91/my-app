import React from "react";
import userPhoto from "./../../Components/commen/images/images.png";
import styles from "./Users.module.css";
import { NavLink } from "react-router-dom";

const User = (props) => {
  let user = props.u;
  return (
    <div>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              alt=""
              src={user.photos.small != null ? user.photos.small : userPhoto}
              className={styles.photo}
            />
          </NavLink>
        </div>
        <div>
          {user.follow ? (
            <button
              disabled={props.followInProgess.some((id) => id === user.id)}
              onClick={() => {
                props.getFollow(user.id);
              }}
            >
              unfollow
            </button>
          ) : (
            <button
              disabled={props.followInProgess.some((id) => id === user.id)}
              onClick={() => {
                props.getUnfollow(user.id);
              }}
            >
              follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div className={styles.selectedPage}>{"user.locaishon.city"}</div>
          <div>{"user.locaishon.country"}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
