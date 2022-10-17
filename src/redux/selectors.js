export const selectUserEmail = state => state.auth.user.email;
export const selectUserName = state => state.auth.user.name;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectToken = state => state.auth.token;

export const selectFilter = state => state.root.filter;
export const selectContacts = state => state.root.contacts;
