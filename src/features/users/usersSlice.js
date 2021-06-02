import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [
    { id: "0", name: "Hassan Tariq" },
    { id: "1", name: "Alqama bin sadiq" }
  ],
  reducers: {}
});

export default usersSlice.reducer;
