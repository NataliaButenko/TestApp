import React, { Component } from 'react';

export class RadioType extends Component {
  onChange = (e) => {
    const { setAnswer, objQuestion, type } = this.props;
    setAnswer(type, e.target.value, objQuestion.id);
  };

  checkAnswer = () => {
    const { objQuestion } = this.props;
    return objQuestion.answer === objQuestion.rightAnswer ? 'questionTrue' : 'questionFalse';
  };

  render() {
    const { objQuestion, index, isAnswerPage } = this.props;
    return (
      <div className='questionCard card'>
        <div className='card-header'>
          <h3 className={ isAnswerPage && this.checkAnswer() }>
            { index }. { objQuestion.question }
           </h3>
        </div>
        <div className='text-left answerChoices'>
        {
          objQuestion.answerChoices.map((answer, index) => {
            return (
                <label key={ index } >
                  <input
                    type="radio"
                    className='input-radio'
                    name={ objQuestion.id }
                    disabled={ isAnswerPage }
                    value={ answer }
                    onChange={ this.onChange }
                    checked={ objQuestion.answer === answer }
                  />
                  { answer }
                </label>
            );
          })
        }
        </div>
      </div>
    )
  }
}
