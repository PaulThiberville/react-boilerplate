import { configureStore } from "@reduxjs/toolkit";
import { postsActions, postsReducer } from "./posts";

export default function configureAppStore() {
  const store = configureStore({
    reducer: {
      posts: postsReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(handleStatus),
  });
  return store;
}

const handleStatus = store => next => action => {
  let result = next(action);
  if (action.payload?.status) {
    console.log("Response Status :", action.payload.status);
  }
  return result;
};
