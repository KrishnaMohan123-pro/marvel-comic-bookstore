import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addPhone } from "../../actions/authActions";
export default function AddAddressForm() {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  function handleChange(e) {
    setPhone(e.target.value);
  }
  function handleSumbit(e) {
    e.preventDefault();
    dispatch(addPhone(phone));
  }
  return (
    <form
      style={{ width: "25rem", padding: "1rem", margin: "1rem" }}
      onSubmit={handleSumbit}
    >
      <TextField
        className="mt-2"
        color="primary"
        id="phone"
        label="Phone"
        style={{ width: "100%" }}
        variant="outlined"
        onChange={handleChange}
        type="text"
      />
      <br />
      <Button variant="contained" color="primary" type="submit">
        Add
      </Button>
    </form>
  );
}
