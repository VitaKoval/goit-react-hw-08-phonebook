import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { authSlice } from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    root: contactsSlice.reducer,
  },
});
