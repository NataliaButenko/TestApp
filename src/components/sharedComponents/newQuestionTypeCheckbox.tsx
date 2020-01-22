import * as React from 'react'
import { createStyles, withStyles } from "@material-ui/core/styles"
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";

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


const NewQuestionTypeCheckboxComponent = (props: Props) => {
    const { classes, question, setAnswer } = props;
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(question.type, event.target.value, question.id);
    };

    return (
        <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
                {question.answerChoices.map((ans: string, index: number) => {
                    return (
                        <FormControlLabel
                            value={ans}
                            control={
                                <Checkbox
                                    checked={ question.answer && question.answer.includes(ans) }
                                    onChange={onChange}
                                    value={ans}
                                    color="primary"
                                />
                            }
                            label={ans}
                            key={index}
                        />
                    );
                })}
            </FormGroup>
        </FormControl>
    )
};

export const NewQuestionTypeCheckbox = withStyles(styles)(NewQuestionTypeCheckboxComponent);