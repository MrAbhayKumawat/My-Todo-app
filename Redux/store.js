import { configureStore } from "@reduxjs/toolkit";

import todosReducer, { setLocalStorage } from "./TodoSlice";
import UpdateTextReducer from "./UpdateSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    updatedata: UpdateTextReducer,
  },
});
store.subscribe(() => {
    setLocalStorage(store.getState().todos);
  });

