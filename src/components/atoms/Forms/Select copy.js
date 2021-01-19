import React, { forwardRef } from "react";
import {Select as MuiSelect, MenuItem} from "@material-ui/core";

export const Select = forwardRef((props, ref, options) => {
  console.log(props)
  return (
    <MuiSelect
      variant="outlined"
      margin="normal"
      inputRef={ref}
      name={props.name}
      id={props.id}
      label={props.label}
      {...props}
    >
      <MenuItem value="">None</MenuItem>
      {
          props.options.map(
              item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
          )
      }
    </MuiSelect>
  );
});
