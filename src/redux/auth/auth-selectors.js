const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

const getIsRefreshing = state => state.auth.isRefreshing;

const getError = state => state.auth.error;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserEmail,
  getIsRefreshing,
  getError,
};

export default authSelectors;
