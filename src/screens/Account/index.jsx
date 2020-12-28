import React from "react";
import { useSelector } from "react-redux";
import ProfileCard from "../../components/profileCard/ProfileCard";
import InputDialog from "../../components/Dialog/inputDialog";
import EditProfileForm from "../../utility/forms/editProfileForm";
import "./styles.css";

export default function Account() {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const user = useSelector((state) => state.auth.user);
  const dialog = useSelector((state) => state.dialog);
  console.log(dialog);
  if (!loggedIn) {
    return (
      <p
        style={{ fontFamily: "Goldman", fontSize: "2rem", marginTop: "4.25%" }}
      >
        Please LOGIN or SIGNUP first...
      </p>
    );
  }

  return (
    <div className="profile-body">
      <ProfileCard
        fname={user.fname}
        lname={user.lname}
        email={user.email}
        address={user.address}
        phone={user.phone}
      />
      <InputDialog
        childComponent={<EditProfileForm />}
        dialogName={"Edit"}
        dialogLabel={"Edit Profile"}
        dialogVisible={dialog.editProfileDialogVisible}
        className="edit-button"
      />
    </div>
  );
}
