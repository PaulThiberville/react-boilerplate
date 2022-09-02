import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { customFetch } from "../../utils/customFetch";

// create slice

const name = "posts";
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, extraReducers });

// exports

export const postsActions = { ...slice.actions, ...extraActions };
export const postsReducer = slice.reducer;

// implementation

function createInitialState() {
  return {
    value: [],
    loading: false,
    error: "",
  };
}

function createExtraActions() {
  const baseUrl = process.env.REACT_APP_API_URL;

  return {
    getPosts: getPosts(),
  };

  function getPosts() {
    return createAsyncThunk(`${name}/setProducts`, async () => {
      return customFetch({ route: "/posts" });
    });
  }
}

function createExtraReducers() {
  return {
    ...getPosts(),
  };

  function getPosts() {
    var { pending, fulfilled, rejected } = extraActions.getPosts;
    return {
      [pending]: state => {
        state.loading = true;
      },
      [fulfilled]: (state, action) => {
        state.loading = false;
        state.value = action.payload.data;
        state.error = "";
      },
      [rejected]: (state, action) => {
        state.loading = false;
        if (action.error) {
          state.error = action.error.message;
        }
      },
    };
  }
}
