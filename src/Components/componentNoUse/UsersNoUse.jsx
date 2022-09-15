import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "./../../../src/images.png";

const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users/")
        .then((respons) => {
          props.setUsers(respons.data.items);
        });
    }
  };

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
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
              <div>{"u.locaishon.city"}</div>
              <div>{"u.locaishon.country"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
