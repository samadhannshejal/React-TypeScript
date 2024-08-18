import { configureStore } from "@reduxjs/toolkit";
import fetchslice from "./fetchslice";
const store=configureStore({
 reducer:{
    fetchData:fetchslice
 }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store