import { createSlice } from "@reduxjs/toolkit";

const registeSlice = createSlice({
  name: "register",
  initialState: { token: "", registers: {}, isFetching: false },
  reducers: {
    setRegister(state, action) {
      state.token = action.payload?.token;
      state.registers = action.payload;
      console.log(action);
    },

    setIsFetching(state, action) {
      state.isFetching = action.payload;
    },
  },
});

export const registerAction = registeSlice.actions;

export default registeSlice.reducer;
