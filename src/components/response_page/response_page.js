import React, { Component } from 'react';
import { connect } from "react-redux";
import { clearAnswers } from "../../store/actions/clearAnswers";
import { Question } from "../questions_page/question";

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

  render() {
    const { questions } = this.props;
    return (
      <div className='wrapper'>
        <h1>Результат</h1>
        <div className='content'>
          {
            questions.map((question, index) => {
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
          }
        </div>
        <div>
          <p className='result'>Правильных ответов { this.numberOfCorrectAnswers } из { questions.length }</p>
          <button className='repeatTest btn' onClick={ this.onRepeatTestButton }>Пройти тест заново</button>
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
