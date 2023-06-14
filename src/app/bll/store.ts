import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authReducer } from "features/auth/auth.slice";
import counterReducer from "trash/features/counter/counterSlice";
import { appReducer } from "app/bll/app.slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    app: appReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
