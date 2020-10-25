import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./styles.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function Number(props) {
  const [inputNumber, setC] = useState(props.v ? props.v : 1);
  const handleIncrement = (event) => {
    const newValue = inputNumber + 1;
    event.stopPropagation();
    setC(newValue);
    props.updatedNumber(props.name, newValue);
  };

  const handleDecrement = (event) => {
    const newValue = inputNumber - 1;
    event.stopPropagation();
    setC(newValue);
    props.updatedNumber(props.name, newValue);
  };

  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button disabled>{inputNumber}</Button>
      <Button onClick={handleIncrement}>
        <AddIcon />
      </Button>
      <Button onClick={handleDecrement}>
        <RemoveIcon />
      </Button>
    </ButtonGroup>
  );
}
