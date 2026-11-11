import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import HomePagereducer from "./screens/homePage/slice";
export const store = configureStore({
  reducer: { HomePage: HomePagereducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
