import React, { Component } from 'react';
import { connect } from "react-redux";
import { RadioType } from "./questionTypeRadio";
import { CheckboxType } from "./questionTypeCheckbox";
import { SelectType } from "./questionTypeSelect";
import { TextType } from "./questionTypeText";
import { QType } from "../../constants/questionTypes";
import { setAnswerTypeRadio } from "../../store/actions/setAnswerTypeRadio";
import { setAnswerTypeCheckbox } from "../../store/actions/setAnswerTypeCheckbox";
import { setAnswerTypeSelect } from "../../store/actions/setAnswerTypeSelect";
import { setAnswerTypeText } from "../../store/actions/setAnswerTypeText";

export class QuestionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentTypes: {
        [QType.CHECKBOX]: { component: CheckboxType, action: props.setAnswerTypeCheckbox },
        [QType.RADIO]: { component: RadioType, action: props.setAnswerTypeRadio },
        [QType.SELECT]: { component: SelectType, action: props.setAnswerTypeSelect },
        [QType.TEXT]: { component: TextType, action: props.setAnswerTypeText }
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
  setAnswerTypeRadio,
  setAnswerTypeCheckbox,
  setAnswerTypeSelect,
  setAnswerTypeText
};

export const Question = connect(null, mapDispatchToProps)(QuestionComponent);
