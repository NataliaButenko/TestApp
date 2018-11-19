import React, { Component } from 'react';

export class TextType extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: props.objQuestion.answer || ''};
  }

  static timer = '';

  static getDerivedStateFromProps(props, state) {
    if(state.inputValue && !props.objQuestion.answer && !TextType.timer) {
      return {inputValue: ''};
    } else {
      return null
    }
  }

  onChange = (e) => {
    const { setAnswer, objQuestion, type } = this.props;
    this.setState({ inputValue: e.target.value });
    clearTimeout(TextType.timer);
    TextType.timer = setTimeout(() => {
      setAnswer(type, this.state.inputValue, objQuestion.id);
      TextType.timer = '';
    }, 500);
  };

  checkAnswer = () => {
    const {objQuestion} = this.props;
    return objQuestion.answer === objQuestion.rightAnswer ? 'questionTrue' : 'questionFalse';
  };

  render() {
    const {inputValue} = this.state;
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
          <input type="text"
                 value={ inputValue }
                 onChange={ this.onChange }
                 disabled={ isAnswerPage }
                 className='form-control'
          />
        </div>

      </div>
    )
  }
}
