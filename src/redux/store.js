import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import { userAPI } from "./services/userApi";
import { setupListeners } from "@reduxjs/toolkit/query/react";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userAPI.middleware]),
});

setupListeners(store.dispatch);
