import React, { memo } from "react";
import { List, Paper } from "@material-ui/core";
import AddText from "./AddText";

const TextItems = memo((props) => (
  <>
    {props.items.length > 0 && (
      <Paper>
        <List>
          {props.items.map((toAdd, idx) => (
            <AddText
              {...toAdd}
              key={`SiteName.${idx}`}
              divider={idx !== props.items.length - 1}
              onButtonClick={() => props.onItemRemove(idx)}
              onCheckBoxToggle={() => props.onItemCheck(idx)}
            />
          ))}
        </List>
      </Paper>
    )}
  </>
));

export default TextItems;
