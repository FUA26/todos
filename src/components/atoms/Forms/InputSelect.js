import React, { forwardRef, useState } from "react";
import {Select as MuiSelect, MenuItem} from "@material-ui/core";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export const InputSelect = forwardRef((props, ref, ...rest) => {
  const [selectedDate, handleDateChange] = useState(props.defaultValue);
  console.log(...rest)
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        name={props.name}
        id={props.id}
        label={props.label}
        locale="pt"
        margin="normal"
        disableToolbar
        inputVariant="outlined"
        value={selectedDate}
        format= 'dd/MM/yyyy'
        onChange={date => {
          handleDateChange(date);
        }}
        error={props.error}
        helperText={props.helperText}
        inputRef={ref}
        {...rest}
      />
    </MuiPickersUtilsProvider>
  );
});
