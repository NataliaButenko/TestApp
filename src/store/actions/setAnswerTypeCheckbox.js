export const SET_ANSWER_TYPE_CHECKBOX = 'set_answer_type_checkbox';

export const setAnswerTypeCheckbox = (answer, questionId) => {
  return{
    type: SET_ANSWER_TYPE_CHECKBOX,
    payload: {
      answer,
      questionId
    }
  };
};
