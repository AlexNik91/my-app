// import React from "react";

// import * as axios from "axios";

// import Users from "./Users";

// class UsersAPI extends React.Component {
//   componentDidMount() {
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentPage}&count=${this.props.pageSize}`
//       )
//       .then((respons) => {
//         this.props.setUsers(respons.data.items);
//         this.props.setTotalUsersCount(respons.data.totalCount);
//       });
//   }

//   onPageClick = (page) => {
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
//       )
//       .then((respons) => {
//         this.props.setUsers(respons.data.items);
//       });
//     this.props.setCurrenPage(page);
//   };

//   render() {
//     return (
//       <Users
//         totalUsersCount={this.props.totalUsersCount}
//         curentPage={this.props.curentPage}
//         pageSize={this.props.pageSize}
//         onPageClick={this.onPageClick}
//         users={this.props.users}
//         unfollow={this.props.unfollow}
//         follow={this.props.follow}
//       />
//     );
//   }
// }
// export default UsersAPI;
