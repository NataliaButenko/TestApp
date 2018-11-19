import React, { Component } from 'react';
import { connect } from "react-redux";
import { clearAnswers } from "../../store/actions/clearAnswers";
import { Question } from "../sharedComponents/question";


export class ResponsePage extends Component {
  constructor() {
    super();
    this.numberOfCorrectAnswers = 0;
    this.styleQuestion = 'questionFalse';
  }

  onRepeatTestButton = (e) => {
    const { clearAnswers, history } = this.props;
    clearAnswers();
    history.push('/questions-page');
  };

  checkForCorrectAnswer = (arrQuestions) => {
    return arrQuestions.map((question, index) => {
      if(question.answer === question.rightAnswer) {
        this.numberOfCorrectAnswers = this.numberOfCorrectAnswers + 1;
        this.styleQuestion = 'questionTrue';
      } else if (Array.isArray(question.answer) && question.answer.length === question.rightAnswer.length){
        let arr = question.answer.reduce((done, ans) => {
          let isTrue = question.rightAnswer.some(rightAnswer => {
            return ans === rightAnswer
          });
          done.push(isTrue);
          return done;
        }, [] );
        if(arr.every(item => item === true)) {
          this.numberOfCorrectAnswers = this.numberOfCorrectAnswers + 1;
          this.styleQuestion = 'questionTrue';
        }
      } else {
        this.styleQuestion = 'questionFalse';
      }
      return <Question
        type={ question.type }
        objQuestion={ question }
        index={ ++index }
        key={ question.type + index }
        styleQuestion={ this.styleQuestion }
        isAnswerPage
      />;
    })
  };

  calculateRating = () => {
    const { questions } = this.props;
    let percentageOfCorrectAnswers = (this.numberOfCorrectAnswers * 100) / questions.length;
    if(percentageOfCorrectAnswers <= 20) {
      return 1
    } else if(percentageOfCorrectAnswers > 20 && percentageOfCorrectAnswers <= 40) {
      return 2
    } else if(percentageOfCorrectAnswers > 40 && percentageOfCorrectAnswers <= 60) {
      return 3
    } else if(percentageOfCorrectAnswers > 60 && percentageOfCorrectAnswers <= 80) {
      return 4
    } else if(percentageOfCorrectAnswers > 80 && percentageOfCorrectAnswers <= 100) {
      return 5
    }
  };

  render() {
    const { questions } = this.props;
    return (
      <div className='container'>
        <h1>Результат</h1>
        <div className='content'>
          { this.checkForCorrectAnswer(questions) }
        </div>
        <div className='result'>
          <p>Правильных ответов { this.numberOfCorrectAnswers } из { questions.length }</p>
          <p>Ваша оценка: { this.calculateRating() }</p>
          <button className='btn btn-info' onClick={ this.onRepeatTestButton }>Пройти тест заново</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    questions: state
  }
};

const mapDispatchToProps = {
  clearAnswers
};

export const Response = connect(mapStateToProps, mapDispatchToProps)(ResponsePage);
