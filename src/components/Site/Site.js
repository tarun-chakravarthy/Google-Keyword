import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Paper, Button, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    padding: "10px",
  },
  Button: {
    padding: "10px",
  },
}));

export default function Site(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={props.label}
        value={props.inputValue}
        onChange={props.onInputChange}
        onKeyPress={props.onInputKeyPress}
        fullWidth
      />
      <Button
        disabled={props.inputValue === ""}
        className={classes.Button}
        color={props.buttonColor}
        variant="contained"
        onClick={props.onButtonClick}
        startIcon={<AddCircleOutlineIcon />}
      >
        Add
      </Button>
    </Paper>
  );
}
