const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USER = "SET_USER";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

let inicialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  curentPage: 1,
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

    default:
      return state;
  }
};

export const followAC = (userId) => ({
  type: FOLLOW,
  userId,
});
export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsersAC = (users) => ({
  type: SET_USER,
  users,
});
export const setCurrentPageAC = (curentPage) => ({
  type: SET_CURRENT_PAGE,
  curentPage,
});
export const setTotalUsersCountAC = (totalUsersCount) => ({
  type: SET_TOTAL_COUNT,
  count: totalUsersCount,
});

export default UsersReducer;
