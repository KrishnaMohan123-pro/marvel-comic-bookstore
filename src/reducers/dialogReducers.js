const initialState = {
  addAddressDialogVisibile: false,
  addPhoneDialogVisible: false,
  editProfileDialogVisible: false,
};
export default function dialogReducer(state = initialState, action) {
  switch (action.type) {
    case "CLOSE_DIALOG":
      return initialState;
    case "OPEN_ADDRESS_DIALOG":
      return {
        addAddressDialogVisibile: true,
        addPhoneDialogVisible: false,
        editProfileDialogVisible: false,
      };
    case "OPEN_PHONE_DIALOG":
      return {
        addAddressDialogVisibile: false,
        addPhoneDialogVisible: true,
        editProfileDialogVisible: false,
      };
    case "OPEN_EDIT_DIALOG":
      return {
        addAddressDialogVisibile: false,
        addPhoneDialogVisible: false,
        editProfileDialogVisible: true,
      };

    default:
      return initialState;
  }
}
