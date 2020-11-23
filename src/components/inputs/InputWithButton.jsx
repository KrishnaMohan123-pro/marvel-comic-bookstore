import React from "react";

export default function Input(props) {
  return (
    <div className="input">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control bg-dark text-light"
          name={props.name}
          onChange={props.handleChange}
          value={props.value}
          placeholder={props.placeholder}
          aria-label={props.placeholder}
          aria-describedby="button-addon2"
          style={{
            backgroundColor: "none",
            border: "none",
            borderRadius: "0%",
          }}
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-dark text-light"
            type="submit"
            id="button-addon2"
          >
            {props.button}
          </button>
        </div>
      </div>
    </div>
  );
}
