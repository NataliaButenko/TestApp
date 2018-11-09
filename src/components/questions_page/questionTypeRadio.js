import React, { Component } from 'react';

export class RadioType extends Component {
  onChange = (e) => {
    const { setAnswer, objQuestion } = this.props;
    setAnswer(e.target.value, objQuestion.id);
  };

  checkAnswer = () => {
    const { objQuestion } = this.props;
    return objQuestion.answer === objQuestion.rightAnswer ? 'questionTrue' : 'questionFalse';
  };

  render() {
    const { objQuestion, index, isAnswerPage } = this.props;
    return (
      <div className='questionCard'>
        <h3 className={ isAnswerPage && this.checkAnswer() }>{ index } { objQuestion.question }</h3>
        {
          objQuestion.answerChoices.map((answer, index) => {
            return (
              <label key={ index }>
                <input
                  type="radio"
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
    )
  }
}
