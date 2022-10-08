import React from "react";

import Paginator from "./paginator";
import User from "./User";

const Users = (props) => {
  return (
    <div>
      <Paginator
        portionSize={10}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        curentPage={props.curentPage}
        onPageClick={props.onPageClick}
      />

      {props.users.map((u) => (
        <User
          u={u}
          key={u.id}
          followInProgess={props.followInProgess}
          getFollow={props.getFollow}
          getUnfollow={props.getUnfollow}
        />
      ))}
    </div>
  );
};

export default Users;
