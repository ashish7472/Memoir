import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    userInfo: (state, action) => {
      // Store the user data from the response
      return action.payload.data || action.payload;
    },
    removeUserInfo: () => {
      return null;
    },
  },
});

export const { userInfo, removeUserInfo } = userSlice.actions;
export default userSlice.reducer;
