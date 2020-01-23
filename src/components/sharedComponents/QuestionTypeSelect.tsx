import * as React from "react";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { IQuestion } from "../../utils/interfaces";

const styles = (theme?: Theme) =>
  createStyles({
    formControl: {
      marginTop: theme.spacing(1),
      width: "100%"
    }
  });

interface Props {
  classes: {
    formControl: string;
  };
  question: IQuestion;
  setAnswer: (type: string, answer: string, questionId: number) => void;
}

const QuestionTypeSelectComponent = (props: Props) => {
  const { classes, question, setAnswer } = props;
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(question.type, event.target.value, question.id);
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
  );
};

export const QuestionTypeSelect = withStyles(styles)(
  QuestionTypeSelectComponent
);
