import React, { forwardRef, useState } from "react";
import {Select as MuiSelect, MenuItem} from "@material-ui/core";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export const DatePicker = forwardRef((props, ref, ...rest) => {
  const [selectedDate, handleDateChange] = useState(props.defaultValue);
  console.log(props)
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        name={props.field}
        id={props.field}
        label={props.field}
        locale="pt"
        margin="normal"
        disableToolbar
        inputVariant="outlined"
        value={selectedDate}
        format= 'dd/MM/yyyy'
        onChange={date => {
          handleDateChange(date);
        }}
       
        inputRef={ref}
        {...rest}
      />
    </MuiPickersUtilsProvider>
  );
});
