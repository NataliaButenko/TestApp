import * as React from 'react'
import { connect } from "react-redux";
import { setAnswerByType } from "../../store/actions/setAnswerByType";
import { QType } from "../../constants/questionTypes.js";
import { NewQuestionTypeCheckbox } from "./newQuestionTypeCheckbox";
import { NewQuestionTypeRadio } from "./newQuestionTypeRadio";
import { NewQuestionTypeSelect } from "./newQuestionTypeSelect";
import { NewQuestionTypeText } from "./newQuestionTyteText";

interface Props {
    classes: {
        formControl: string;
    };
    question: {
        id: number;
        type: string;
        question: string;
        answerChoices: [string];
        rightAnswer: string;
        answer: string;
    },
    setAnswerByType: any;
    type: string;
}


const NewQuestionComponent = (props: Props) => {
    const {setAnswerByType, type} = props;
    const [componentTypes, setComponentTypes] = React.useState<any>({
        [QType.CHECKBOX]: { component: NewQuestionTypeCheckbox },
        [QType.RADIO]: { component: NewQuestionTypeRadio },
        [QType.SELECT]: { component: NewQuestionTypeSelect },
        [QType.TEXT]: { component: NewQuestionTypeText }
    });
    const QuestionByType: any = componentTypes[type].component;
    return (
        <QuestionByType { ...props } setAnswer={ setAnswerByType } />
    )
};

const mapDispatchToProps = {
    setAnswerByType
};

export const NewQuestion = connect(null, mapDispatchToProps)(NewQuestionComponent);