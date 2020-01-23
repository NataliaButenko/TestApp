import { questions } from "../../api/api";
import { CLEAR_ANSWERS } from "../actions/clearAnswers";
import { QType } from "../../constants/questionTypes";
import { SET_ANSWER_TYPE } from "../actions/setAnswerByType";

const savedQuestions = JSON.parse(localStorage.getItem("questions") || "[]");

const initialState = () => {
  if (savedQuestions.length === 0) {
    return questions;
  } else {
    return savedQuestions;
  }
};

const setSavedQuestions = (newQuestions) => {
  localStorage.setItem("questions", JSON.stringify(newQuestions));
};

export const reducer = (state = initialState(), action) => {
  switch (action.type) {
    case SET_ANSWER_TYPE + QType.RADIO: {
      let newQuestions = state.map((question) => {
        if (question.id === action.payload.questionId) {
          return { ...question, answer: action.payload.answer };
        } else {
          return question;
        }
      });
      setSavedQuestions(newQuestions);
      return newQuestions;
    }
    case SET_ANSWER_TYPE + QType.SELECT: {
      let newQuestions = state.map((question) => {
        if (question.id === action.payload.questionId) {
          return { ...question, answer: action.payload.answer };
        } else {
          return question;
        }
      });
      setSavedQuestions(newQuestions);
      return newQuestions;
    }
    case SET_ANSWER_TYPE + QType.TEXT: {
      let newQuestions = state.map((question) => {
        if (question.id === action.payload.questionId) {
          return { ...question, answer: action.payload.answer };
        } else {
          return question;
        }
      });
      setSavedQuestions(newQuestions);
      return newQuestions;
    }
    case SET_ANSWER_TYPE + QType.CHECKBOX: {
      let newQuestions = state.map((question) => {
        if (question.id === action.payload.questionId) {
          const answerIndex = question.answer.indexOf(action.payload.answer);
          let newAnswer = question.answer;
          if (answerIndex !== -1) {
            newAnswer.splice(answerIndex, 1);
          } else {
            newAnswer.push(action.payload.answer);
          }
          return { ...question, answer: newAnswer };
        } else {
          return question;
        }
      });
      setSavedQuestions(newQuestions);
      return newQuestions;
    }
    case CLEAR_ANSWERS: {
      let newQuestions = state.map((question) => {
        if (question.type === QType.CHECKBOX) {
          return { ...question, answer: [] };
        } else {
          return { ...question, answer: "" };
        }
      });
      setSavedQuestions(newQuestions);
      return newQuestions;
    }
    default: {
      setSavedQuestions(state);
      return state;
    }
  }
};
