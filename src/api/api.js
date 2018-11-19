import { createId} from "../utils/createId";

export const questions = [
  {
    id: createId(),
    type: 'radio',
    question: 'Какое из утверждений о комментариях верное?',
    answerChoices: ['Комментарии упрощают понимание скрипта.', 'Комментарии увеличивают скорость выполнения скрипта.',
      'Комментарии уменьшают размер исходного кода.', 'В JavaScript нельзя использовать комментарии.'],
    rightAnswer: 'Комментарии упрощают понимание скрипта.',
    answer: ''
  },
  {
    id: createId(),
    type: 'radio',
    question: 'Что такое ECMAScript?',
    answerChoices: ['Новый язык програмирования.', 'Переработанная реализация JavaScript.', 'Спецификация языка JavaScript.'],
    rightAnswer: 'Спецификация языка JavaScript.',
    answer: ''
  },
  {
    id: createId(),
    type: 'checkbox',
    question: 'Какой из вариантов объявления функции правильный',
    answerChoices: ['var func = function() {};', 'var func = function {};', 'function func() {};', 'Все варианты верные.'],
    rightAnswer: ['var func = function() {};', 'function func() {};'],
    answer: []
  },
  {
    id: createId(),
    type: 'checkbox',
    question: 'Что делает оператор === ?',
    answerChoices: ['Сравнивает по ссылке, а не по значению.', 'Сравнивает без приведения типа.', 'Нет такого оператора'],
    rightAnswer: ['Сравнивает без приведения типа.'],
    answer: []
  },
  {
    id: createId(),
    type: 'select',
    question: 'Какая функция вызывает окно с предупреждающим сообщением?',
    answerChoices: ['confirm()', 'alert()', 'prompt()', 'promt()'],
    rightAnswer: 'alert()',
    answer: ''
  },
  {
    id: createId(),
    type: 'select',
    question: 'Что делает функция printMessage("Text")?',
    answerChoices: ['Функция printMessage() вообще не существует.', 'Выводит окно с текстом "Text".',
      'Выводит окно с текстом Text.', 'Ошибка, поскольку в функции printMessage() 2 параметра.'],
    rightAnswer: 'Функция printMessage() вообще не существует.',
    answer: ''
  },
  {
    id: createId(),
    type: 'text',
    question: 'Что выведет операция console.log(typeof(null));',
    answerChoices: '',
    rightAnswer: 'object',
    answer: ''
  },
  {
    id: createId(),
    type: 'text',
    question: 'Какой оператор в javascript выполняет не только математические операции',
    answerChoices: '',
    rightAnswer: '+',
    answer: ''
  }
];
