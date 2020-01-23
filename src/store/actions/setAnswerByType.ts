import { IQuestion } from "../../utils/interfaces";
export const SET_ANSWER_TYPE = "set_answer_type_";

export const setAnswerByType = (
  type: string,
  answer: IQuestion,
  questionId: string | number
) => {
  return {
    type: SET_ANSWER_TYPE + type,
    payload: {
      answer,
      questionId
    }
  };
};
