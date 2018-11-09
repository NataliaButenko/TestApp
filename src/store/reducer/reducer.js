import { createId } from "../../utils/createId";
import { SET_ANSWER_TYPE_RADIO } from "../actions/setAnswerTypeRadio";
import { SET_ANSWER_TYPE_CHECKBOX } from "../actions/setAnswerTypeCheckbox";
import { SET_ANSWER_TYPE_SELECT } from "../actions/setAnswerTypeSelect";
import { SET_ANSWER_TYPE_TEXT } from "../actions/setAnswerTypeText";
import { CLEAR_ANSWERS } from "../actions/clearAnswers";
import { QType } from "../../constants/questionTypes";

const question1 = {
  id: createId(),
  type: 'radio',
  question: 'Какое из утверждений о комментариях верное?',
  answerChoices: ['Комментарии упрощают понимание скрипта.', 'Комментарии увеличивают скорость выполнения скрипта.',
    'Комментарии уменьшают размер исходного кода.', 'В JavaScript нельзя использовать комментарии.'],
  rightAnswer: 'Комментарии упрощают понимание скрипта.',
  answer: ''
};

const question2 = {
  id: createId(),
  type: 'radio',
  question: 'Что такое ECMAScript?',
  answerChoices: ['Новый язык програмирования.', 'Переработанная реализация JavaScript.', 'Спецификация языка JavaScript.'],
  rightAnswer: 'Спецификация языка JavaScript.',
  answer: ''
};

const question3 = {
  id: createId(),
  type: 'checkbox',
  question: 'Какой из вариантов объявления функции правильный',
  answerChoices: ['var func = function() {};', 'var func = function {};', 'function func() {};', 'Все варианты верные.'],
  rightAnswer: ['var func = function() {};', 'function func() {};'],
  answer: []
};

const question4 = {
  id: createId(),
  type: 'checkbox',
  question: 'Что делает оператор === ?',
  answerChoices: ['Сравнивает по ссылке, а не по значению.', 'Сравнивает без приведения типа.', 'Нет такого оператора'],
  rightAnswer: ['Сравнивает без приведения типа.'],
  answer: []
};

const question5 = {
  id: createId(),
  type: 'select',
  question: 'Какая функция вызывает окно с предупреждающим сообщением?',
  answerChoices: ['confirm()', 'alert()', 'prompt()', 'promt()'],
  rightAnswer: 'alert()',
  answer: ''
};

const question6 = {
  id: createId(),
  type: 'select',
  question: 'Что делает функция printMessage("Text")?',
  answerChoices: ['Функция printMessage() вообще не существует.', 'Выводит окно с текстом "Text".',
    'Выводит окно с текстом Text.', 'Ошибка, поскольку в функции printMessage() 2 параметра.'],
  rightAnswer: 'Функция printMessage() вообще не существует.',
  answer: ''
};

const question7 = {
  id: createId(),
  type: 'text',
  question: 'Что выведет операция console.log(typeof(null));',
  answerChoices: '',
  rightAnswer: 'object',
  answer: ''
};

const question8 = {
  id: createId(),
  type: 'text',
  question: 'Какой оператор в javascript выполняет не только математические операции',
  answerChoices: '',
  rightAnswer: '+',
  answer: ''
};

export const initialState = [question1, question2, question3, question4, question5, question6, question7, question8];


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANSWER_TYPE_RADIO: {
      return state.map(question => {
        if(question.id === action.payload.questionId) {
          return { ...question, answer: action.payload.answer }
        } else {
          return question
        }
      })
    }
    case SET_ANSWER_TYPE_CHECKBOX: {
      return state.map(question => {
        if(question.id === action.payload.questionId) {
          const answerIndex = question.answer.indexOf(action.payload.answer);
          let newAnswer = question.answer;
          if(answerIndex !== -1) {
            newAnswer.splice(answerIndex, 1);
          } else {
            newAnswer.push(action.payload.answer);
          }
          let newQuestion = { ...question, answer: newAnswer };
          return newQuestion
        } else {
          return question
        }
      })
    }
    case SET_ANSWER_TYPE_SELECT: {
      return state.map(question => {
        if(question.id === action.payload.questionId) {
          return { ...question, answer: action.payload.answer }
        } else {
          return question
        }
      })
    }
    case SET_ANSWER_TYPE_TEXT: {
      return state.map(question => {
        if(question.id === action.payload.questionId) {
          return { ...question, answer: action.payload.answer }
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
