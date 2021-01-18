const initialState = {
  addAddressDialogVisibile: false,
  addPhoneDialogVisible: false,
  addBookDialogVisible: false,
  changeProfileImageDialogVisible: false,
};
export default function dialogReducer(state = initialState, action) {
  switch (action.type) {
    case "CLOSE_DIALOG":
      return initialState;
    case "OPEN_ADDRESS_DIALOG":
      return {
        addAddressDialogVisibile: true,
        addPhoneDialogVisible: false,
        addBookDialogVisible: false,
        changeProfileImageDialogVisible: false,
      };
    case "OPEN_PHONE_DIALOG":
      return {
        addAddressDialogVisibile: false,
        addPhoneDialogVisible: true,
        addBookDialogVisible: false,
        changeProfileImageDialogVisible: false,
      };
    case "OPEN_NEW_BOOK_DIALOG":
      return {
        addAddressDialogVisibile: false,
        addPhoneDialogVisible: false,
        addBookDialogVisible: true,
        changeProfileImageDialogVisible: false,
      };
    case "OPEN_NEW_PROFILE_IMAGE_DIALOG":
      return {
        addAddressDialogVisibile: false,
        addPhoneDialogVisible: false,
        addBookDialogVisible: false,
        changeProfileImageDialogVisible: true,
      };

    default:
      return initialState;
  }
}
