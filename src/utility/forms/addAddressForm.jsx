import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import firebase from "../../services/firebase/index";
import { useSelector, useDispatch } from "react-redux";

export default function AddAddressForm() {
  const [address, setAddress] = useState({
    addressLine1: "",
    addressLine2: "",
    pin: "",
    city: "",
    state: "",
    country: "",
  });
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.auth.uid);
  const user = useSelector((state) => state.auth.user);

  function handleChange(e) {
    var id = e.target.id;
    var value = e.target.value;
    setAddress((prevValue) => {
      switch (id) {
        case "addressLine1":
          return {
            addressLine1: value,
            addressLine2: prevValue.addressLine2,
            pin: prevValue.pin,
            city: prevValue.city,
            state: prevValue.state,
            country: prevValue.country,
          };
        case "addressLine2":
          return {
            addressLine1: prevValue.addressLine1,
            addressLine2: value,
            pin: prevValue.pin,
            city: prevValue.city,
            state: prevValue.state,
            country: prevValue.country,
          };
        case "pin":
          return {
            addressLine1: prevValue.addressLine1,
            addressLine2: prevValue.addressLine2,
            pin: value,
            city: prevValue.city,
            state: prevValue.state,
            country: prevValue.country,
          };
        case "city":
          return {
            addressLine1: prevValue.addressLine1,
            addressLine2: prevValue.addressLine2,
            pin: prevValue.pin,
            city: value,
            state: prevValue.state,
            country: prevValue.country,
          };
        case "state":
          return {
            addressLine1: prevValue.addressLine1,
            addressLine2: prevValue.addressLine2,
            pin: prevValue.pin,
            city: prevValue.city,
            state: value,
            country: prevValue.country,
          };
        case "country":
          return {
            addressLine1: prevValue.addressLine1,
            addressLine2: prevValue.addressLine2,
            pin: prevValue.pin,
            city: prevValue.city,
            state: prevValue.state,
            country: value,
          };
      }
    });
  }
  console.log(address);
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
              address: address,
              email: user.email,
              fname: user.fname,
              lname: user.lname,
              phone: user.phone,
              photoURL: user.photoURL,
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
        id="addressLine1"
        label="Address Line 1"
        style={{ width: "100%" }}
        variant="outlined"
        onChange={handleChange}
        type="text"
        required
      />
      <TextField
        className="mt-2"
        color="primary"
        id="addressLine2"
        label="Address Line 2"
        style={{ width: "100%" }}
        variant="outlined"
        onChange={handleChange}
        type="text"
      />
      <TextField
        className="mt-2"
        color="primary"
        id="pin"
        label="Pin"
        style={{ width: "100%" }}
        variant="outlined"
        onChange={handleChange}
        type="text"
        required
      />
      <TextField
        className="mt-2"
        color="primary"
        id="city"
        label="City"
        style={{ width: "100%" }}
        variant="outlined"
        onChange={handleChange}
        type="text"
        required
      />
      <TextField
        className="mt-2"
        color="primary"
        id="state"
        label="State"
        style={{ width: "100%" }}
        variant="outlined"
        onChange={handleChange}
        type="text"
        required
      />
      <TextField
        className="mt-2"
        color="primary"
        id="country"
        label="Country"
        style={{ width: "100%" }}
        variant="outlined"
        onChange={handleChange}
        type="text"
        required
      />
      <br />
      <Button variant="contained" color="primary" type="submit">
        Add
      </Button>
    </form>
  );
}
