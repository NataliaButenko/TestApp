export const SET_ANSWER_TYPE_TEXT = 'set_answer_type_text';

export const setAnswerTypeText = (answer, questionId) => {
  return{
    type: SET_ANSWER_TYPE_TEXT,
    payload: {
      answer,
      questionId
    }
  };
};
