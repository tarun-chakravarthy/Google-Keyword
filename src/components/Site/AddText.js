import React, { memo } from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
} from "@material-ui/core";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

const AddText = memo((props) => (
  <ListItem divider={props.divider}>
    <ListItemText primary={props.text} />
    <ListItemSecondaryAction>
      <Button
        startIcon={<RemoveCircleOutlineIcon />}
        onClick={props.onButtonClick}
      >
        Clear
      </Button>
    </ListItemSecondaryAction>
  </ListItem>
));

export default AddText;
