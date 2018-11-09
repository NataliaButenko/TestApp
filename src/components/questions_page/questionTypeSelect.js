import React, { Component } from 'react';

export class SelectType extends Component {
  onChange = (e) => {
    const { setAnswer, objQuestion } = this.props;
    setAnswer(e.target.value, objQuestion.id);
  };

  checkAnswer = () => {
    const { objQuestion } = this.props;
    return objQuestion.answer === objQuestion.rightAnswer ? 'questionTrue' : 'questionFalse';
  };

  render() {
    const {
      objQuestion,
      index,
      isAnswerPage,
      } = this.props;
    return(
      <div className='questionCard'>
        <h3 className={ isAnswerPage && this.checkAnswer() }>{ index } { objQuestion.question }</h3>
        <select onChange={ this.onChange } disabled={ isAnswerPage } value={ objQuestion.answer }>
          <option hidden>select answer</option>
          {
            objQuestion.answerChoices.map((answer,index) => {
              return (
                <option key={ index } value={ answer }>
                  { answer }
                </option>
              )
            })
          }
        </select>
      </div>
    )
  }
}
