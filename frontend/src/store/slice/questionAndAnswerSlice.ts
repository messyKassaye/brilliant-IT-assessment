import { createSlice } from "@reduxjs/toolkit";
import { IQuestionAndAnswerState } from "../state/IQuestionAndAnswer.state";
import { IQuestionAndAnswer } from "../../models/IQuestionAndAnswer.model";

const initialState: IQuestionAndAnswerState = {
  questionAndAnswers: [],
};

const questionAndAnswerSlice = createSlice({
  name: "questionAndAnswer",
  initialState,
  reducers: {
    updateQuestionAndAnswer: (state, action) => {
      const questionAndAnswer: IQuestionAndAnswer = action.payload;
      state.questionAndAnswers = [
        ...state.questionAndAnswers,
        questionAndAnswer,
      ];
    },
  },
});

export const { updateQuestionAndAnswer } = questionAndAnswerSlice.actions;
export default questionAndAnswerSlice.reducer;
