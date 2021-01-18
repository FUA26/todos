import React, { forwardRef } from "react";
import {Select as MuiSelect, MenuItem} from "@material-ui/core";

export const Select = forwardRef((props, ref, options) => {
  return (
    <MuiSelect
      variant="outlined"
      margin="normal"
      inputRef={ref}
      {...props}
    >
      <MenuItem value="">None</MenuItem>
      {
          options.map(
              item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
          )
      }
    </MuiSelect>
  );
});
