import React, { Component } from 'react';
import { ModalWindow } from './modalWindowComponent/modalWindow';
import { connect } from "react-redux";
import { Question } from "../sharedComponents/question";
import { clearAnswers } from "../../store/actions/clearAnswers";

export class QuestionsPage extends Component {
  constructor() {
    super();
    this.state = {
      visibleModalWindow: false
    };
    this.styleQuestion = 'question';
  }

  onSubmitClick = () => {
    const { questions, history } = this.props;
    let unanswered = questions.some(question => {
      return question.answer === '';
    });
    if(unanswered) {
      this.setState({
        visibleModalWindow: true
      });
    } else {
      history.push('/response-page');
    }
  };

  hideModalWindow = () => {
    this.setState({
      visibleModalWindow: false
    });
  };

  onRepeatTestButton = (e) => {
    const { clearAnswers } = this.props;
    clearAnswers();
  };

  render() {
    const { visibleModalWindow } = this.state;
    const { questions } = this.props;
    return (
      <div className='container'>
        <h1>Экзаминационны модуль на тему: JavaScript</h1>
        <div className='content'>
          {
            questions.map((question, index) => {
              return <Question
                type={ question.type }
                objQuestion={ question }
                index={ ++index }
                key={ question.type + index }
                styleQuestion={ this.styleQuestion }
                disabled={ this.disabled }
              />;
            })
          }
        </div>
        <div>
          <button className='btn btn-info' onClick={ this.onRepeatTestButton }>Сбросить все</button>
          <button className='btn btn-info' onClick={ this.onSubmitClick }>
            Ответить
          </button>
        </div>
        {
          visibleModalWindow ? <ModalWindow hideModalWindow={ this.hideModalWindow } /> : ''
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state
  }
};

const mapDispatchToProps = {
  clearAnswers
};

export const Questions = connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);
