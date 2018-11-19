import React, { Component } from 'react';

export class SelectType extends Component {
  onChange = (e) => {
    const { setAnswer, objQuestion, type } = this.props;
    setAnswer(type, e.target.value, objQuestion.id);
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
      <div className='questionCard card'>
        <div className='card-header'>
          <h3 className={ isAnswerPage && this.checkAnswer() }>{ index }. { objQuestion.question }</h3>
        </div>
        <div className='text-left answerChoices'>
          <select onChange={ this.onChange }
                  disabled={ isAnswerPage }
                  value={ objQuestion.answer }
                  className='form-control'>
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
      </div>
    )
  }
}
