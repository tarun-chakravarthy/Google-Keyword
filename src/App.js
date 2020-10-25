import React, { memo } from "react";
import "./index.css";
import { Grid } from "@material-ui/core";
import { useInputValue, useWebsite } from "./hooks";
import Site from "./components/Site/Site";
import TextItems from "./components/Site/TextItems";

const AddApp = memo((props) => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { webSites, addWebsite, checkWebsite, clearWebsite } = useWebsite();

  // const [items, setItems] = React.useState(props.items);

  const clearInputAndWeb = (_) => {
    clearInput();
    addWebsite(inputValue);
    console.log(inputValue);
    console.log(webSites);

    props.updated([inputValue]);
  };

  return (
    <div>
      <Grid>
        <Site
          key="site"
          label={props.label ? props.label : ""}
          buttonColor={props.buttonColor}
          inputValue={inputValue}
          onInputChange={changeInput}
          onButtonClick={clearInputAndWeb}
          onInputKeyPress={(event) => keyInput(event, clearInputAndWeb)}
        />
        <TextItems items={webSites} onItemRemove={(idx) => clearWebsite(idx)} />
      </Grid>
    </div>
  );
});

export default AddApp;
