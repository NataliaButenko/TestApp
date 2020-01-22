import * as React from 'react'
import { History } from 'history';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import { createStyles, withStyles } from "@material-ui/core/styles"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import { NewQuestion } from "./sharedComponents/newQuestion";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
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
            alignItems: "center",
             "& button:focus" : {
                outline: 0
             }
        },
        root: {
            width: '100%',
            marginTop: theme.spacing(1),
            maxWidth: "500px",

        },
        button: {
            marginRight: theme.spacing(1),
        },
        completed: {
            display: 'inline-block',
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        stepper: {
            padding: theme.spacing(3, 1),
        },
        cardWrapper: {
            height: "100%"
        },
        cardContent: {
            height: "80%"
        },
        cardActions: {
            height: "20%"
        },
        cardActionsWrapper: {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        }
    });

interface Props {
    classes: {
        card: string;
        main: string;
        root: string;
        button: string;
        completed: string;
        instructions: string;
        stepper: string;
        cardWrapper: string;
        cardContent: string;
        cardActions: string;
        cardActionsWrapper: string;
    };
    questions: IQuestion[],
    history: History,
    clearAnswers: () => void
}

const NewQuestionsPage = (props: Props) => {
    const { classes, questions, history, clearAnswers } = props;
    const [activeStep, setActiveStep] = React.useState<number>(0);
    const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>({});
    const [steps, setSteps] = React.useState<IQuestion[]>(questions);

    const getStepAnswer = (step: number) => {
        let currentStep: IQuestion;
        questions.forEach((answer: IQuestion) => {
          if (answer.id === step) {
            currentStep = answer;
          }
        });
        return currentStep;
    };

    const answer: IQuestion = getStepAnswer(activeStep);

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                steps.findIndex((step: any, i: any) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        localStorage.removeItem("activeStep");
        localStorage.removeItem("completed");
        localStorage.removeItem("questions");
        clearAnswers();
        setActiveStep(0);
        setCompleted({});
    };

    const handleRust = () => {
        history.push("/new_response-page")
    };

    React.useEffect(() => {
        const savedActiveStep = JSON.parse(
            localStorage.getItem("activeStep") || "0"
        ) as number;
        setActiveStep(savedActiveStep);
        const saveCompleted = JSON.parse(localStorage.getItem("completed") || "{}");
        setCompleted(saveCompleted);
    }, []);
    
    React.useEffect(() => {
        localStorage.setItem("activeStep", JSON.stringify(activeStep));
        localStorage.setItem("completed", JSON.stringify(completed));
    }, [activeStep, completed]);

  return (
    <main className={classes.main}>
      <div>
        <Card className={classes.card}>
            {allStepsCompleted() ? (
                <div className={classes.cardWrapper}>
                    <CardContent className={classes.cardContent}>
                        <Typography className={classes.instructions}>
                            All steps completed - you&apos;re finished
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <div>
                            <Button onClick={handleReset}>Reset</Button>
                            <Button onClick={handleRust}>Result</Button>
                        </div>
                    </CardActions>
                </div>
            ) : (
                <div className={classes.cardWrapper}>
                    <CardContent className={classes.cardContent}>
                        <div>
                            <Typography className={classes.instructions}>{answer.question}</Typography>
                        </div>
                        <div>
                            {
                                answer.type === "" ? null : (<NewQuestion type={answer.type} question={answer}/>)
                            }
                        </div>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <div className={classes.cardActionsWrapper}>
                            <Button onClick={handleBack} disabled={activeStep === 0}>
                                <ArrowBackIcon />
                            </Button>
                            {activeStep !== steps.length &&
                            (completed[activeStep] ? (
                                <Typography
                                    variant="caption"
                                    className={classes.completed}
                                >
                                    Question {activeStep + 1} has already been
                                </Typography>
                            ) : (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleComplete}
                                >
                                    {completedSteps() === totalSteps() - 1
                                        ? "Finish"
                                        : "Reply"}
                                </Button>
                            ))}
                            <Button onClick={handleNext}>
                                <ArrowForwardIcon />
                            </Button>
                        </div>
                    </CardActions>
                </div>
            )}
        </Card>
      </div>
      <div className={classes.root}>
          <Stepper nonLinear activeStep={activeStep} className={classes.stepper}>
              {steps.map((label, index) => (
                  <Step key={label.id}>
                      <StepButton onClick={handleStep(index)} completed={completed[index]}>
                      </StepButton>
                  </Step>
              ))}
          </Stepper>
      </div>
    </main>
  )
};

const mapStateToProps = (state: any) => {
  return {
    questions: state
  }
};

const mapDispatchToProps = {
    clearAnswers
};

export const NewQuestions = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NewQuestionsPage));