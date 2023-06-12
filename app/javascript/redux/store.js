import { configureStore } from "@reduxjs/toolkit";
import greetingsReducer from "./slices/greetingSlice";

const store = configureStore({
  reducer: {
    greeting: greetingsReducer,
  },
});

export default store;
