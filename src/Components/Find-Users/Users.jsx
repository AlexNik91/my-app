import React from "react";
import userPhoto from "./../../../src/images.png";
import styles from "./Users.module.css";

const Users = (props) => {
  {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      if (pages.length <= 9) {
        pages.push(i);
      }
    }
    return (
      <div>
        <div>
          {pages.map((p) => {
            return (
              <span
                className={props.curentPage === p && styles.selectedPage}
                onClick={(e) => props.onPageClick(p)}
              >
                {p}
              </span>
            );
          })}
        </div>
        <div></div>
        {props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={styles.photo}
                />
              </div>
              <div>
                {u.follow ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
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
