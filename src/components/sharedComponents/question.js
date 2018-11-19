import React, { Component } from 'react';
import { connect } from "react-redux";
import { RadioType } from "./questionTypeRadio";
import { CheckboxType } from "./questionTypeCheckbox";
import { SelectType } from "./questionTypeSelect";
import { TextType } from "./questionTypeText";
import { QType } from "../../constants/questionTypes";
import { setAnswerByType } from "../../store/actions/setAnswerByType";

export class QuestionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentTypes: {
        [QType.CHECKBOX]: { component: CheckboxType, action: props.setAnswerByType },
        [QType.RADIO]: { component: RadioType, action: props.setAnswerByType },
        [QType.SELECT]: { component: SelectType, action: props.setAnswerByType },
        [QType.TEXT]: { component: TextType, action: props.setAnswerByType }
      }
    };
  }

  render() {
    const { type } = this.props;
    const { componentTypes } = this.state;
    const QuestionByType = componentTypes[type].component;
    const setAnswer = componentTypes[type].action;
    return (
      <QuestionByType { ...this.props } setAnswer={ setAnswer } />
    )
  }
}

const mapDispatchToProps = {
  setAnswerByType
};

export const Question = connect(null, mapDispatchToProps)(QuestionComponent);
