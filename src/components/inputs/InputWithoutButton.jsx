import React from "react";

export default function InputWithoutButton(props) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control bg-dark"
        placeholder={props.placeholder}
        aria-label={props.placeholder}
        aria-describedby="basic-addon1"
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
}
