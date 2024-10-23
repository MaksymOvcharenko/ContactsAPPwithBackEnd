export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserEmail = (state) => state.auth.user.email;
export const selectSendResetEmail = (state) => state.auth.isResetPwd;
export const selectSendResetEmailOpen = (state) => state.auth.isOpen;
export const selectIsValidPassword = (state) => state.auth.isPasswordIsNotValid;
