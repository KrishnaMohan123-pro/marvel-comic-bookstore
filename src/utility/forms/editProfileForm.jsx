import React, { Fragment } from "react";
import InputDialog from "../../components/Dialog/inputDialog";
import AddAddressForm from "./addAddressForm";
import AddPhoneForm from "./addPhoneForm";
import { useSelector } from "react-redux";

export default function EditProfileForm() {
  const dialog = useSelector((state) => state.dialog);
  const phone = useSelector((state) => state.auth.user.phone);
  const address = useSelector((state) => state.auth.user.address);
  return (
    <Fragment>
      <InputDialog
        childComponent={<AddAddressForm />}
        dialogName={"Address"}
        dialogLabel={
          address.addressLine1.length === 0 ? "Add Address" : "Edit Address"
        }
        dialogVisible={dialog.addAddressDialogVisibile}
      />
      <br />
      <InputDialog
        childComponent={<AddPhoneForm />}
        dialogName={"Phone"}
        dialogLabel={
          phone.length === 0 ? "Add Phone Number" : "Edit Phone Number"
        }
        dialogVisible={dialog.addPhoneDialogVisible}
      />
    </Fragment>
  );
}
