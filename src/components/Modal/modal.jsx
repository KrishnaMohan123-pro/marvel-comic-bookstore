import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  title: {
    color: "#121212",
  },
}));

export default function TransitionsModal(props) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleOpen = () => {
    dispatch({ type: "OPEN_" + props.modalName + "_MODAL" });
  };

  const handleClose = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <div>
      <Button variant="text" color="inherit" type="button" onClick={handleOpen}>
        {props.linkName}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.modalVisible}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.modalVisible}>
          <div className={classes.paper}>
            <h2 className={classes.title} id="transition-modal-title">
              {props.modalTitle}
            </h2>
            <div id="transition-modal-description">{props.childComponent}</div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
