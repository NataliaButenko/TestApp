import * as React from 'react'
import { createStyles, withStyles } from "@material-ui/core/styles"
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = (theme?: any) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            width: "100%"
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
    setAnswer: any;
}


const NewQuestionTypeSelectComponent = (props: Props) => {
    const { classes, question, setAnswer } = props;
    const onChange = (e: any) => {
        setAnswer(question.type, e.target.value, question.id);
    };

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <Select
                native
                value={question.answer}
                onChange={onChange}
                inputProps={{
                    name: "age",
                    id: "outlined-age-native-simple"
                }}
            >
                <option value="" />
                {question.answerChoices.map((tmp: string, index: number) => {
                    return (
                        <option value={tmp} key={index}>
                            {tmp}
                        </option>
                    );
                })}
            </Select>
        </FormControl>
    )
};

export const NewQuestionTypeSelect = withStyles(styles)(NewQuestionTypeSelectComponent);