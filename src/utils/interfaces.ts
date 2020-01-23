export interface IQuestion {
  id: number;
  type: string;
  question: string;
  answerChoices: string[];
  rightAnswer: string | string[];
  answer: string | [];
}
