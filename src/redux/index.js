import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import baby from "./baby";
const store = configureStore({
  reducer: {
    auth: auth,
    baby: baby,
  },
});

export default store;
