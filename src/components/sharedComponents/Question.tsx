import * as React from "react";
import { connect } from "react-redux";
import { setAnswerByType } from "../../store/actions/setAnswerByType";
import { QType } from "../../constants/questionTypes";
import { QuestionTypeCheckbox } from "./QuestionTypeCheckbox";
import { QuestionTypeRadio } from "./QuestionTypeRadio";
import { QuestionTypeSelect } from "./QuestionTypeSelect";
import { QuestionTypeText } from "./QuestionTypeText";
import { IQuestion } from "../../utils/interfaces";

interface Props {
  question: IQuestion;
  setAnswerByType: (
    type: string,
    answer: IQuestion,
    questionId: string | number
  ) => void;
  type: string;
}

const QuestionComponent = (props: Props) => {
  const { setAnswerByType, type } = props;
  const [componentTypes, setComponentTypes] = React.useState<any>({
    [QType.CHECKBOX]: { component: QuestionTypeCheckbox },
    [QType.RADIO]: { component: QuestionTypeRadio },
    [QType.SELECT]: { component: QuestionTypeSelect },
    [QType.TEXT]: { component: QuestionTypeText }
  });
  const QuestionByType: any = componentTypes[type].component;
  return <QuestionByType {...props} setAnswer={setAnswerByType} />;
};

const mapDispatchToProps = {
  setAnswerByType
};

export const Question = connect(null, mapDispatchToProps)(QuestionComponent);
