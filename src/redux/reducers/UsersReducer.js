import { usersAPI } from "../../API/API";

const FOLLOW = "usersReducer/FOLLOW";
const UNFOLLOW = "usersReducer/UNFOLLOW";
const SET_USER = "usersReducer/SET_USER";
const SET_CURRENT_PAGE = "usersReducer/SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "usersReducer/SET_TOTAL_COUNT";
const SET_LOADER = "usersReducer/SET_LOADER";
const SET_FOLLOWING_LOADER = "usersReducer/SET_FOLLOWING_LOADER";

let inicialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  curentPage: null,
  isFetching: true,
  followInProgess: [],
};

const UsersReducer = (state = inicialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) return { ...u, follow: true };

          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) return { ...u, follow: false };

          return u;
        }),
      };
    case SET_USER:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        curentPage: action.curentPage,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case SET_LOADER:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case SET_FOLLOWING_LOADER:
      return {
        ...state,
        followInProgess: action.isFetching
          ? [...state.followInProgess, action.userId]
          : state.followInProgess.filter((id) => id != action.userId),
      };

    default:
      return state;
  }
};

export const follow = (userId) => ({
  type: FOLLOW,
  userId,
});
export const unfollow = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsers = (users) => ({
  type: SET_USER,
  users,
});
export const setCurrentPage = (curentPage) => ({
  type: SET_CURRENT_PAGE,
  curentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_COUNT,
  count: totalUsersCount,
});
export const setIsFetching = (isFetching) => ({
  type: SET_LOADER,
  isFetching,
});
export const setFollowInProgess = (isFetching, userId) => ({
  type: SET_FOLLOWING_LOADER,
  isFetching,
  userId,
});

export const getUsersThunkCreator = (page, pageSize) => async (dispatch) => {
  dispatch(setIsFetching(true));
  dispatch(setCurrentPage(page));
  let data = await usersAPI.user(page, pageSize);
  dispatch(setIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

export const getFollowThunkCreator = (userId) => async (dispatch) => {
  dispatch(setFollowInProgess(true, userId));
  let data = await usersAPI.usersUnfollow(userId);
  if (data.resultCode == 0) {
    dispatch(unfollow(userId));
  }
  dispatch(setFollowInProgess(false, userId));
};

export const getUnfollowThunkCreator = (userId) => async (dispatch) => {
  dispatch(setFollowInProgess(true, userId));
  let data = await usersAPI.usersFollow(userId);
  if (data.resultCode === 0) {
    dispatch(follow(userId));
  }
  dispatch(setFollowInProgess(false, userId));
};

export default UsersReducer;
