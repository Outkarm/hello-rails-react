import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  greeting: "", // Set the initial value to an empty string
  loading: false,
  error: "",
};

export const fetchGreeting = createAsyncThunk("fetchGreeting", async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/v1/greetings");
    const { data } = response;
    console.log(data); // Check if the response data is as expected
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

const greetingsSlice = createSlice({
  name: "greetings",
  initialState,
  reducers: {},
  // Inside greetingsSlice
  // Inside greetingSlice
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.greeting = action.payload.greeting; // Update the greeting value
      state.loading = false;
    });
    builder.addCase(fetchGreeting.rejected, (state) => {
      state.error = "Could Not Fetch Greeting";
      state.loading = false;
    });
  },
});

export default greetingsSlice.reducer;
