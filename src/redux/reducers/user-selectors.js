export const usersSelector = (state) => {
  return state.usersState.users;
};

export const totalUsersSelector = (state) => {
  return state.usersState.totalUsersCount;
};

export const isFetchingSelector = (state) => {
  return state.usersState.isFetching;
};

export const pageSizeSelector = (state) => {
  return state.usersState.pageSize;
};

export const curentPageSelector = (state) => {
  return state.usersState.curentPage;
};
export const followInProgersSelector = (state) => {
  return state.usersState.followInProgess;
};
