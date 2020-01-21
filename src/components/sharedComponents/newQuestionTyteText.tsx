import * as React from 'react'
import { createStyles, withStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField";

const styles = (theme?: any) =>
    createStyles({
        root: {
            width: "100%"
        }
    });

interface Props {
    classes: {
        root: string;
    };
    question: {
        id: number;
        type: string;
        question: string;
        answerChoices: [string];
        rightAnswer: string;
        answer: string;
    },
    setAnswer: (type: string, answer: string, questionId: number) => void;
}


const NewQuestionTypeTextComponent = (props: Props) => {
    const { classes, question, setAnswer } = props;
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(question.type, event.target.value, question.id);
    };

    return (
        <TextField
            className={classes.root}
            id="outlined-basic"
            label="Text"
            variant="outlined"
            value={question.answer}
            onChange={onChange}
        />
    )
};

export const NewQuestionTypeText = withStyles(styles)(NewQuestionTypeTextComponent);