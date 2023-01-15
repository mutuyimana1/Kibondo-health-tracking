import { createSlice } from "@reduxjs/toolkit";

const getAllBabiesSlice = createSlice({
  name: "babyname",
  initialState: { babies: [], selectedBaby: {}, isFetching: false },
  //   initialState: { token: "", babies: {}, isFetching: false },
  reducers: {
    setbaby(state, action) {
      //   state.token = action.payload?.data?.token;
      state.babies = action.payload;
    },
    setselectedBaby(state, action) {
      //   state.token = action.payload?.data?.token;
      state.selectedBaby = action.payload;
    },
    setIsFetching(state, action) {
      state.isFetching = action.payload;
    },
  },
});

export const babyAction = getAllBabiesSlice.actions;

export default getAllBabiesSlice.reducer;
