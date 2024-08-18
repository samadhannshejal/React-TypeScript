import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
interface MyFetchData {
  limit: number;
  produts: [];
  skip: number;
  total: number;
}
const initialState: MyFetchData = {
  limit: 0,
  produts: [],
  skip: 0,
  total: 0,
};
export const fetchData = createAsyncThunk("fetch/fetchData", async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const result = response.json();
    return result;
  } catch (error) {
    return error;
  }
});

const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchData.pending, (state, action) => {});
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const {limit,products,total,skip}=action.payload;
      state.limit=limit,
      state.produts=products,
      state.total=total,
      state.skip=skip
    });
   
  },
});

export default fetchSlice.reducer;
