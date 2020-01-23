import * as React from "react";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";

const styles = (theme?: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1)
    },
    formControlLabel: {
      margin: theme.spacing(0)
    }
  });

interface Props {
  classes: {
    formControl: string;
    formControlLabel: string;
  };
  question: {
    id: number;
    type: string;
    question: string;
    answerChoices: string[];
    rightAnswer: string | string[];
    answer: string | string[];
  };
  setAnswer: (type: string, answer: string, questionId: number) => void;
}

const QuestionTypeCheckboxComponent = (props: Props) => {
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
                  checked={question.answer && question.answer.includes(ans)}
                  onChange={onChange}
                  value={ans}
                  color="primary"
                />
              }
              label={ans}
              key={index}
              className={classes.formControlLabel}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
};

export const QuestionTypeCheckbox = withStyles(styles)(
  QuestionTypeCheckboxComponent
);
