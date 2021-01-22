import React, { Fragment } from "react";
import InputDialog from "../../components/Dialog/inputDialog";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import AddAddressForm from "../../utility/forms/addAddressForm";
import AddPhoneForm from "../../utility/forms/addPhoneForm";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
export default function ProfileCard(props) {
  const dialog = useSelector((state) => state.dialog);
  return (
    <Fragment>
      <div className="profile-pic-section">
        <div style={{ position: "relative" }}>
          <img
            className="profile-img"
            src={
              props.photoURL.length === 0
                ? "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                : props.photoURL
            }
            alt="display picture"
          />
          <Button
            variant="text"
            style={{ position: "absolute", top: "90%", left: "48%" }}
          >
            <CameraAltIcon fontSize="small" />
          </Button>
        </div>
      </div>
      <div
        className="profile-card container d-flex justify-content-center"
        style={{ color: "white" }}
      >
        <div className="profile-card-row row bg-danger py-5 d-flex">
          <div className="profile-name col-lg-4">
            <p className="section-label">Name: </p>
            <p className="section-details profile-fname">{props.fname}</p>
            <p className="section-details profile-lname">{props.lname}</p>
          </div>
          <div className="profile-details col-lg-8">
            <div className="profile-email">
              <p className="section-label">Email: </p>
              <p className="section-details email">{props.email}</p>
            </div>
            <div className="profile-phone">
              <p className="section-label">Phone Number: </p>
              <p className="section-details phone">
                {props.phone.length === 0 ? (
                  <InputDialog
                    childComponent={<AddPhoneForm />}
                    dialogName={"Phone"}
                    dialogLabel={"Add Phone Number"}
                    dialogVisible={dialog.addPhoneDialogVisible}
                  />
                ) : (
                  props.phone
                )}
              </p>
            </div>
            <div className="profile-address">
              <p className="section-label">Address: </p>
              <p className="section-details address">
                {props.address.addressLine1.length === 0 ? (
                  <InputDialog
                    childComponent={<AddAddressForm />}
                    dialogName={"Address"}
                    dialogLabel={"Add Address"}
                    dialogVisible={dialog.addAddressDialogVisibile}
                  />
                ) : (
                  <Fragment>
                    {props.address.addressLine1}
                    <br />
                    {props.address.addressLine2}
                    <br />
                    {props.address.pin}
                    <br />
                    {props.address.city}
                    <br />
                    {props.address.state}
                    <br />
                    {props.address.country}
                    <br />
                  </Fragment>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
