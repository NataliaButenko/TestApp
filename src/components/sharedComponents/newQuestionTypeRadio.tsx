import * as React from 'react'
import { createStyles, withStyles } from "@material-ui/core/styles"
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

const styles = (theme?: any) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1)
        }
    });

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
    setAnswer: (type: string, answer: string, questionId: number) => void;
}


const NewQuestionTypeRadioComponent = (props: Props) => {
    const { classes, question, setAnswer } = props;
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(question.type, event.target.value, question.id);
    };

    return (
        <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
                aria-label="gender"
                name="gender1"
                value={question.answer}
                onChange={onChange}
            >
                {question.answerChoices.map((tmp: string, index: number) => {
                    return (
                        <FormControlLabel
                            value={tmp}
                            control={<Radio color="primary" />}
                            label={tmp}
                            key={index}
                        />
                    );
                })}
            </RadioGroup>
        </FormControl>
    )
};

export const NewQuestionTypeRadio = withStyles(styles)(NewQuestionTypeRadioComponent);