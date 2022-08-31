import React from "react";

import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
  setFollowInProgess,
  getUsersThunkCreator,
} from "../../redux/reducers/UsersReducer";
import Users from "./Users";
import IsLoader from "../commen/commenFile/loader.jsx";
import { getUsers } from "../../API/API";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    getUsers(this.props.curentPage, this.props.pageSize).then((data) => {
      this.props.setIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }

  onPageClick = (page) => {
    this.props.setCurrentPage(page);
    this.props.setIsFetching(true);

    getUsers(page, this.props.pageSize).then((data) => {
      this.props.setIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <IsLoader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          curentPage={this.props.curentPage}
          onPageClick={this.onPageClick}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          setFollowInProgess={this.props.setFollowInProgess}
          followInProgess={this.props.followInProgess}
        />
      </>
    );
  }
}

// let MapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrenPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     setIsFetching: (isFetching) => {
//       dispatch(setIsFetchingAC(isFetching));
//     },
//   };
// };

let MapStateToProps = (state) => {
  return {
    pageSize: state.usersState.pageSize,
    totalUsersCount: state.usersState.totalUsersCount,
    curentPage: state.usersState.curentPage,
    isFetching: state.usersState.isFetching,
    users: state.usersState.users,
    followInProgess: state.usersState.followInProgess,
  };
};

export default connect(MapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
  setFollowInProgess,
})(UsersContainer);
