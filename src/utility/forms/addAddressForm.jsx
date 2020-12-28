import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import firebase from "../../services/firebase/index";
import { useSelector, useDispatch } from "react-redux";

export default function AddAddressForm() {
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.auth.uid);
  const user = useSelector((state) => state.auth.user);

  function handleChange(e) {
    setAddress(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .update({ address: address })
      .then(() => {
        dispatch({ type: "CLOSE_DIALOG" });
        dispatch({
          type: "INITIALISE_USER",
          payload: {
            user: {
              email: user.email,
              fname: user.fname,
              lname: user.lname,
              phone: user.phone,
              address: address,
            },
            uid: uid,
          },
        });
      });
  }
  return (
    <form
      style={{ width: "25rem", padding: "1rem", margin: "1rem" }}
      onSubmit={handleSubmit}
    >
      <TextField
        className="mt-2"
        color="primary"
        id="address"
        label="Address"
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
