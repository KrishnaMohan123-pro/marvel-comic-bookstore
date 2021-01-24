import React from "react";
import { FormControl, MenuItem, Select, InputLabel } from "@material-ui/core";

export default function Selector(props) {
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
