import React, { Component } from 'react';

export class CheckboxType extends Component {
  onChange = (e) => {
    const { setAnswer, objQuestion } = this.props;
    setAnswer(e.target.value, objQuestion.id);
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
      <div className='questionCard'>
        <h3 className={ isAnswerPage && this.checkAnswer()}>{ index } { objQuestion.question }</h3>
        {
          objQuestion.answerChoices.map((answer, index) => {
            return (
              <label key={ index }>
                <input type="checkbox"
                       value={ answer }
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
    )
  }
}
