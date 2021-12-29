import * as type from "../types";

const INITITAL_STATE = {
  testData: {
    testName: "",
    testTime: null,
    point: null,
  },
  listQuestions: [],
  selectedQuestion: { id: 0, answer: [], selectedAnswer: "" },
  selectedQuestionId: 1,
};

export default function snDoTestReducer(state = INITITAL_STATE, action) {
  switch (action.type) {
    case type.SET_SELECTED_QUESTION:
      return {
        ...state,
        selectedQuestion: action.payload,
        selectedQuestionId: action.payload.questionId,
      };
    case type.SET_LIST_QUESTION:
      return {
        ...state,
        listQuestions: action.payload,
      };
    case type.SET_TEST_DATA:
      return {
        ...state,
        testData: action.payload,
      };
    default:
      return state;
  }
}
