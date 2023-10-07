import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      // console.log(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    // eslint-disable-next-line no-unused-vars
    deleteUsers(state, action) {
      return [];
    },
  },
});
export const { addUser, removeUser, deleteUsers } = userSlice.actions;
export { userSlice };
