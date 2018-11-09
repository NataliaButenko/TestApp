export const SET_ANSWER_TYPE_SELECT = 'set_answer_type_select';

export const setAnswerTypeSelect = (answer, questionId) => {
  return{
    type: SET_ANSWER_TYPE_SELECT,
    payload: {
      answer,
      questionId
    }
  };
};
