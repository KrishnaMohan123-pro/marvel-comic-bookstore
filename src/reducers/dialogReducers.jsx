const initialState = {
  addAddressDialogVisibile: false,
  addPhoneDialogVisible: false,
  addBookDialogVisible: false,
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
      };
    case "OPEN_PHONE_DIALOG":
      return {
        addAddressDialogVisibile: false,
        addPhoneDialogVisible: true,
        addBookDialogVisible: false,
      };
    case "OPEN_NEW_BOOK_DIALOG":
      return {
        addAddressDialogVisibile: false,
        addPhoneDialogVisible: false,
        addBookDialogVisible: true,
      };

    default:
      return initialState;
  }
}
