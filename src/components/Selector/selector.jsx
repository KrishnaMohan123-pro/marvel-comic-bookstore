import React from "react";
import { FormControl, MenuItem, Select, InputLabel } from "@material-ui/core";

export default function Selector(props) {
  let backgroundColor = {
    formBackgroundColor: "#121221",
    selectBackgroundColor: "none",
  };
  if (props.value.length !== 0) {
    backgroundColor = {
      formBackgroundColor: "white",
      selectBackgroundColor: "white",
    };
  }

  return (
    <FormControl
      style={{
        backgroundColor: "white",
        width: "7rem",
      }}
    >
      <InputLabel>{props.label}</InputLabel>
      <Select value={props.value} onChange={props.onChange}>
        {props.options.map((option) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
