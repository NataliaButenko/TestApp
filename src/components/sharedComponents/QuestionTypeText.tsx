import * as React from "react";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { IQuestion } from "../../utils/interfaces";

const styles = (theme?: Theme) =>
  createStyles({
    root: {
      width: "100%"
    }
  });

interface Props {
  classes: {
    root: string;
  };
  question: IQuestion;
  setAnswer: (type: string, answer: string, questionId: number) => void;
}

const QuestionTypeTextComponent = (props: Props) => {
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
  );
};

export const QuestionTypeText = withStyles(styles)(QuestionTypeTextComponent);
