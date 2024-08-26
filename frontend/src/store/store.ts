import { configureStore } from "@reduxjs/toolkit";
import QuestionAndAnswerSlice from "./slice/questionAndAnswerSlice";
const store = configureStore({
  reducer: { QuestionAndAnswerSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
