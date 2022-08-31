import React from "react";
import userPhoto from "./../../../src/Components/commen/images/images.png";
import styles from "./Users.module.css";
import { NavLink } from "react-router-dom";

import { getUsersFollow, getUsersUnfollow } from "../../API/API";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    if (pages.length <= 9) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map((p) => {
            return (
              <span
                className={props.curentPage === p && styles.selectedPage}
                onClick={(e) => {
                  props.onPageClick(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>

        {props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <NavLink to={"/profile/" + u.id}>
                  <img
                    alt=""
                    src={u.photos.small != null ? u.photos.small : userPhoto}
                    className={styles.photo}
                  />
                </NavLink>
              </div>
              <div>
                {u.follow ? (
                  <button
                    disabled={props.followInProgess.some((id) => id === u.id)}
                    onClick={() => {
                      props.setFollowInProgess(true, u.id);
                      getUsersUnfollow(u.id).then((data) => {
                        if (data.resultCode == 0) {
                          props.unfollow(u.id);
                        }
                        props.setFollowInProgess(false, u.id);
                      });
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followInProgess.some((id) => id === u.id)}
                    onClick={() => {
                      props.setFollowInProgess(true, u.id);
                      getUsersFollow(u.id).then((data) => {
                        if (data.resultCode === 0) {
                          props.follow(u.id);
                        }
                        props.setFollowInProgess(false, u.id);
                      });
                    }}
                  >
                    follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div className={styles.selectedPage}>{"u.locaishon.city"}</div>
                <div>{"u.locaishon.country"}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
};
export default Users;
