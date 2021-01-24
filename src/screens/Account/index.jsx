import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import InputDialog from "../../components/Dialog/inputDialog";
import AddAddressForm from "../../utility/forms/addAddressForm";
import AddPhoneForm from "../../utility/forms/addPhoneForm";
import "./styles.css";
import { Container, Grid } from "@material-ui/core";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import AddNewBookForm from "../../utility/forms/addNewBookForm";
import ChangeProfileImageForm from "../../utility/forms/changeProfileImageForm";

export default function Account() {
  const loggedIn = useSelector((state) => state.loggedIn);
  const user = useSelector((state) => state.auth.user);
  const auth = useSelector((state) => state.auth);
  const dialog = useSelector((state) => state.dialog);
  const role = useSelector((state) => state.auth.user.role);
  console.log(user);

  if (!loggedIn) {
    return (
      <p style={{ fontFamily: "Goldman", fontSize: "2rem" }}>
        Please LOGIN or SIGNUP first...
      </p>
    );
  }
  if (auth.uid.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <div
      className="profile-body"
      style={{ fontFamily: "Roboto", marginTop: "1.5rem" }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Grid
              container
              direction="column"
              style={{
                backgroundColor: "white",
                border: "solid grey 0.1rem",
                paddingTop: "2rem",
                paddingBottom: "2rem",
              }}
            >
              <Grid item style={{ marginBottom: "2rem" }}>
                <img
                  alt={user.fname}
                  src={
                    user.photoURL.length === 0
                      ? "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                      : user.photoURL
                  }
                  style={{ height: "7rem", width: "6rem" }}
                />
                <Grid item>
                  <InputDialog
                    childComponent={<ChangeProfileImageForm />}
                    dialogName={"New_profile_image"}
                    dialogLabel={<CameraAltIcon />}
                    dialogVisible={dialog.changeProfileImageDialogVisible}
                  />
                </Grid>
              </Grid>
              <Grid item style={{ lineHeight: "0.15rem" }}>
                <h6>Name:</h6>
                <p>{user.fname}</p>
                <br />
                <p>{user.lname}</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            style={{
              backgroundColor: "white",
              textAlign: "left",
              border: "solid grey 0.1rem",
            }}
          >
            <Grid container direction="column">
              <Grid item>
                <h6>Email:</h6>
                <p>{user.email}</p>
              </Grid>
              <Grid item>
                <h6>Phone Number:</h6>
                {user.phone.length === 0 ? (
                  <InputDialog
                    childComponent={<AddPhoneForm />}
                    dialogName={"Phone"}
                    dialogLabel={"Add Phone Number"}
                    dialogVisible={dialog.addPhoneDialogVisible}
                  />
                ) : (
                  <p>{user.phone}</p>
                )}
              </Grid>
              <Grid item style={{ lineHeight: "0.15rem" }}>
                <h6>Address:</h6>
                {user.address.addressLine1.length === 0 ? (
                  <InputDialog
                    childComponent={<AddAddressForm />}
                    dialogName={"Address"}
                    dialogLabel={"Add Address"}
                    dialogVisible={dialog.addAddressDialogVisibile}
                  />
                ) : (
                  <Fragment>
                    <p>{user.address.addressLine1}</p>
                    <p>{user.address.addressLine2}</p>
                    <p>{user.address.pin}</p>
                    <p>{user.address.city}</p>
                    <p>{user.address.state}</p>
                    <p>{user.address.country}</p>
                  </Fragment>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={2} md={2} sm={12} xs={12}>
            <Grid container spacing={4} direction="column">
              <Grid item>
                {user.phone.length === 0 ? null : (
                  <InputDialog
                    childComponent={<AddPhoneForm />}
                    dialogName={"Phone"}
                    dialogLabel={"Edit Phone"}
                    dialogVisible={dialog.addPhoneDialogVisible}
                  />
                )}
              </Grid>
              <Grid item>
                {user.address.addressLine1.length === 0 ? null : (
                  <InputDialog
                    childComponent={<AddAddressForm />}
                    dialogName={"Address"}
                    dialogLabel={"Edit Address"}
                    dialogVisible={dialog.addAddressDialogVisibile}
                  />
                )}
              </Grid>
              <Grid item>
                {role === "admin" ? (
                  <InputDialog
                    childComponent={<AddNewBookForm />}
                    dialogName="New_Book"
                    dialogLabel="Add New Book"
                    dialogVisible={dialog.addBookDialogVisible}
                  />
                ) : null}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
