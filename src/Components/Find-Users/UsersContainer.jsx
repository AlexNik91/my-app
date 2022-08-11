import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import {
  followAC,
  setUsersAC,
  unfollowAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setIsFetchingAC,
} from "../../redux/reducers/UsersReducer";
import Users from "./Users";
import IsLoader from "../commen/commenFile/loader.jsx";

let MapStateToProps = (state) => {
  return {
    users: state.usersState.users,
    pageSize: state.usersState.pageSize,
    totalUsersCount: state.usersState.totalUsersCount,
    curentPage: state.usersState.curentPage,
    isFetching: state.usersState.isFetching,
  };
};

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentPage}&count=${this.props.pageSize}`
      )
      .then((respons) => {
        this.props.setIsFetching(false);
        this.props.setUsers(respons.data.items);
        this.props.setTotalUsersCount(respons.data.totalCount);
      });
  }

  onPageClick = (page) => {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((respons) => {
        this.props.setIsFetching(false);
        this.props.setUsers(respons.data.items);
      });
    this.props.setCurrenPage(page);
  };

  render() {
    return (
      <>
        {" "}
        {this.props.isFetching ? <IsLoader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          curentPage={this.props.curentPage}
          pageSize={this.props.pageSize}
          onPageClick={this.onPageClick}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
        />
      </>
    );
  }
}

let MapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrenPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
    setIsFetching: (isFetching) => {
      dispatch(setIsFetchingAC(isFetching));
    },
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(UsersAPI);
