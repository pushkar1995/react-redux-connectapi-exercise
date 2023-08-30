import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    error: undefined,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: {},
});

export const { setUsers, setIsLoading, setError } = usersSlice.actions;
export default usersSlice.reducer;
export {usersSlice};