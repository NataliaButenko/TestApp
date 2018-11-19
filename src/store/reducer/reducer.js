import { questions } from "../../api/api";
import { CLEAR_ANSWERS } from "../actions/clearAnswers";
import { QType } from "../../constants/questionTypes";
import { SET_ANSWER_TYPE } from "../actions/setAnswerByType";

const initialState = questions;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANSWER_TYPE + QType.RADIO: {
      return state.map(question => {
        if(question.id === action.payload.questionId) {
          return { ...question, answer: action.payload.answer }
        } else {
          return question
        }
      })
    }
    case SET_ANSWER_TYPE + QType.SELECT: {
      return state.map(question => {
        if(question.id === action.payload.questionId) {
          return { ...question, answer: action.payload.answer }
        } else {
          return question
        }
      })
    }
    case SET_ANSWER_TYPE + QType.TEXT: {
      return state.map(question => {
        if(question.id === action.payload.questionId) {
          return { ...question, answer: action.payload.answer }
        } else {
          return question
        }
      })
    }
    case SET_ANSWER_TYPE + QType.CHECKBOX: {
      return state.map(question => {
        if(question.id === action.payload.questionId) {
          const answerIndex = question.answer.indexOf(action.payload.answer);
          let newAnswer = question.answer;
          if(answerIndex !== -1) {
            newAnswer.splice(answerIndex, 1);
          } else {
            newAnswer.push(action.payload.answer);
          }
          return { ...question, answer: newAnswer };
        } else {
          return question
        }
      })
    }
    case CLEAR_ANSWERS: {
      return state.map(question => {
        if(question.type === QType.CHECKBOX) {
          return { ...question, answer: [] }
        } else {
          return { ...question, answer: '' }
        }
      })
    }
    default: {
      return state;
    }
  }
};
