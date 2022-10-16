export const selectUserEmail = state => state.auth.user.email;
export const selectUserName = state => state.auth.user.name;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectToken = state => state.auth.token;



//  user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,