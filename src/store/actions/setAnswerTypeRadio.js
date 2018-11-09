export const SET_ANSWER_TYPE_RADIO = 'set_answer_type_radio';

export const setAnswerTypeRadio = (answer, questionId) => {
  return{
    type: SET_ANSWER_TYPE_RADIO,
    payload: {
      answer,
      questionId
    }
  };
};
