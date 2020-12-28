import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import firebase from "../../services/firebase/index";
import { useSelector, useDispatch } from "react-redux";

export default function EditProfileForm() {
  const dispatch = useDispatch();
  const [newUserData, setNewUserData] = useState({ phone: "", address: "" });
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const uid = useSelector((state) => state.auth.uid);
  function handleChange(e) {
    let id = e.target.id;
    let value = e.target.value;
    setNewUserData((prevValue) => {
      switch (id) {
        case "phone":
          return {
            phone: value,
            address: prevValue.address,
          };
        case "address":
          return {
            phone: prevValue.phone,
            address: value,
          };
        default:
          return prevValue;
      }
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .update({ address: newUserData.address, phone: newUserData.phone })
      .then(() => {
        dispatch({ type: "CLOSE_DIALOG" });
        dispatch({
          type: "INITIALISE_USER",
          payload: {
            user: {
              email: user.email,
              fname: user.fname,
              lname: user.lname,
              phone: newUserData.phone,
              address: newUserData.address,
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
        id="phone"
        label="Phone"
        style={{ width: "100%" }}
        variant="outlined"
        onChange={handleChange}
        type="number"
      />
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
