import * as React from "react";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = (theme?: Theme) =>
  createStyles({
    dialogContent: {
      maxWidth: "500px",
      minWidth: "400px"
    },
    title: {
      color: "#ebb210"
    }
  });

interface Props {
  classes: {
    dialogContent: string;
    title: string;
  };
  open: boolean;
  handleClose: () => void;
  handleYes: () => void;
}

const ModalWarning = (props: Props) => {
  const { open, handleClose, handleYes, classes } = props;
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className={classes.title}>
          Warning
        </DialogTitle>
        <DialogContent dividers className={classes.dialogContent}>
          <DialogContentText id="alert-dialog-description">
            Each unanswered answer is considered incorrect. Are you sure you
            want to continue?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleYes} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(ModalWarning);
