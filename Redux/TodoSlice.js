import { createSlice } from "@reduxjs/toolkit";

// Check if localStorage is available (i.e., not running on the server)
const initialState =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("todos")) || []
    : [];

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    removeTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updatetodo: (state, action) => {
      state.forEach((item) => {
        if (item.id === action.payload.id) {
          item.text = action.payload.text;
        }
      });
    },
  },
});

export const { addTodo, removeTodo, updatetodo } = todosSlice.actions;

// Save todos to localStorage in the browser environment
export const setLocalStorage = (state) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("todos", JSON.stringify(state));
  }
};

export default todosSlice.reducer;
  