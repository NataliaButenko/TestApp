import React, { Component } from 'react';

export class CheckboxType extends Component {
  onChange = (e) => {
    const { setAnswer, objQuestion, type } = this.props;
    setAnswer(type, e.target.value, objQuestion.id);
  };

  checkAnswer = () => {
    const { objQuestion } = this.props;
    return objQuestion.rightAnswer.every(item => objQuestion.answer.includes(item)) ? 'questionTrue' : 'questionFalse';
  };

  render() {
    const { objQuestion,
            index,
            isAnswerPage } = this.props;
    return(
      <div className='questionCard card'>
        <div className='card-header'>
          <h3 className={ isAnswerPage && this.checkAnswer()}>{ index }. { objQuestion.question }</h3>
        </div>
        <div className='text-left answerChoices'>
          {
            objQuestion.answerChoices.map((answer, index) => {
              return (
                <label key={ index }>
                  <input type="checkbox"
                         value={ answer }
                         className='input-checkbox'
                         onChange={ this.onChange }
                         disabled={ isAnswerPage }
                         checked={ objQuestion.answer && objQuestion.answer.includes(answer) }
                  />
                  { answer }
                </label>
              )
            })
          }
        </div>

      </div>
    )
  }
}
