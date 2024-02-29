const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUser = state => state.auth.user;

const selectIsRefreshing = state => state.auth.isRefreshing;

const selectError = state => state.auth.error;

export { selectIsLoggedIn, selectUser, selectIsRefreshing, selectError };
