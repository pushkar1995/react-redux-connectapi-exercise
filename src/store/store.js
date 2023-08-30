import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './useReducer';
import { usersSlice } from './users/userSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    usersSlice: usersSlice.reducer,
  },
});

export default store;