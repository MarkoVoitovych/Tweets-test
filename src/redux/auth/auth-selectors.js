export const selectIsAuth = ({ auth }) => auth.isLogin;
export const selectUser = ({ auth }) => auth.user;
export const selectIsFetching = ({ auth }) => auth.isFetching;
