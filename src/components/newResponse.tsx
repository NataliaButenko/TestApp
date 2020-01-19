
import * as React from 'react'
import { connect } from "react-redux";
import { createStyles, withStyles } from "@material-ui/core/styles"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

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
            width: '100%',
            marginTop: theme.spacing(1),
            maxWidth: "500px",

        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        result: {
            color: "#1cb333",
            fontSize: "30px"
        },
        cardContent: {
            height:  "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }
    });

const GreenLinearProgress = withStyles({
    root: {
        height: 24,
        backgroundColor: '#b2f1bc',
        margin: "24px 0px"
    },
    bar: {
        borderRadius: 20,
        backgroundColor: '#1db333',
    },
})(LinearProgress);

interface Props {
    classes: {
        card: string;
        main: string;
        progress: string;
        result: string;
        instructions: string;
        cardContent: string;
    };
    questions: [any]
}

const NewResponsePage = (props: Props) => {
    const { classes } = props;
    const [completed, setCompleted] = React.useState(0);

    React.useEffect(() => {
        function progress() {
            setCompleted(oldCompleted => {
                if (oldCompleted === 67) {
                    return 67;
                }
                const diff = Math.random() * 10;
                return Math.min(oldCompleted + diff, 67);
            });
        }

        const timer = setInterval(progress, 400);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <main className={classes.main}>
            <div>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography className={`${classes.instructions} ${completed === 67? classes.result : ""}`}>
                            {Math.ceil(completed)} %
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className={classes.progress}>
                <GreenLinearProgress variant="determinate" value={completed} />
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
    // clearAnswers
};

export const NewResponse = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NewResponsePage));