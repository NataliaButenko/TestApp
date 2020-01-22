import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { History } from "history";
import { createStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { IQuestion } from "../utils/interfaces";
import { clearAnswers } from "../store/actions/clearAnswers";

const styles = (theme?: any) =>
  createStyles({
    card: {
      width: "500px",
      height: "320px"
    },
    main: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    progress: {
      width: "100%",
      marginTop: theme.spacing(1),
      maxWidth: "500px"
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    result: {
      color: "#1cb333",
      fontSize: "30px"
    },
    cardContent: {
      height: "80%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    cardActions: {
      height: "20%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
  });

const GreenLinearProgress = withStyles({
  root: {
    height: 24,
    backgroundColor: "#b2f1bc",
    margin: "24px 0px"
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#1db333"
  }
})(LinearProgress);

interface Props {
  classes: {
    card: string;
    main: string;
    progress: string;
    result: string;
    instructions: string;
    cardContent: string;
    cardActions: string;
  };
  questions: IQuestion[];
    clearAnswers: () => void;
  history: History;
}

const NewResponsePage = (props: Props) => {
  const { classes, history, questions, clearAnswers } = props;
  const [completed, setCompleted] = React.useState(0);

  const checkCorrectAnswer = () => {
    let correctAnswer: number = 0
    questions.map((question) => {
      if(question.answer === question.rightAnswer) {
        correctAnswer = correctAnswer + 1;
      } else if (Array.isArray(question.answer) && question.answer.length === question.rightAnswer.length){
        let tmp = question.answer.every((ques: string) => {
            return question.rightAnswer.includes(ques)
        })
        if(tmp) {
            correctAnswer = correctAnswer + 1; 
        }
      } 
    })
    return (correctAnswer * 100)/questions.length;
  };

  React.useEffect(() => {
      const progressNum = checkCorrectAnswer();
    function progress() {
      setCompleted((oldCompleted) => {
        if (oldCompleted === progressNum) {
          return progressNum;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, progressNum);
      });
    }

    const timer = setInterval(progress, 400);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const testAgain = () => {
    localStorage.removeItem("activeStep");
    localStorage.removeItem("completed");
    localStorage.removeItem("questions");
    clearAnswers();
    history.push("/new_questions-page");
  };

  return (
    <main className={classes.main}>
      <div>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h3">
                Your result
            </Typography>
            <Typography
              className={`${classes.instructions} ${
                completed === checkCorrectAnswer() ? classes.result : ""
              }`}
            >
              {Math.ceil(completed)} %
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button variant="contained" color="primary" onClick={testAgain}>
              take the test again
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className={classes.progress}>
        <GreenLinearProgress variant="determinate" value={completed} />
      </div>
    </main>
  );
};

const mapStateToProps = (state: IQuestion[]) => {
  return {
    questions: state
  };
};
const mapDispatchToProps = {
    clearAnswers
};

export const NewResponse = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(NewResponsePage));
