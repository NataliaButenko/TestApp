export const SET_ANSWER_TYPE = 'set_answer_type_';

export const setAnswerByType = (type, answer, questionId) => {

  return{
    type: SET_ANSWER_TYPE + type,
    payload: {
      answer,
      questionId
    }
  };
};