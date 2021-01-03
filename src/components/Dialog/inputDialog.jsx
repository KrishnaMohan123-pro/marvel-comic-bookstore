import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch } from "react-redux";

export default function FormDialog(props) {
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    dispatch({ type: `OPEN_${props.dialogName.toUpperCase()}_DIALOG` });
  };

  const handleClose = () => {
    dispatch({ type: "CLOSE_DIALOG" });
  };

  return (
    <div>
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={handleClickOpen}
      >
        {props.dialogLabel}
      </Button>
      <Dialog
        open={props.dialogVisible}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{props.dialogLabel}</DialogTitle>
        <DialogContent>{props.childComponent}</DialogContent>
      </Dialog>
    </div>
  );
}
