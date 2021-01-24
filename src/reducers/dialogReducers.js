import {
  _CLOSE_DIALOG,
  _OPEN_ADDRESS_DIALOG,
  _OPEN_NEW_BOOK_DIALOG,
  _OPEN_NEW_PROFILE_IMAGE_DIALOG,
  _OPEN_PHONE_DIALOG,
} from "../actions/actionsList/dialogActionsList";

const initialState = {
  addAddressDialogVisibile: false,
  addPhoneDialogVisible: false,
  addBookDialogVisible: false,
  changeProfileImageDialogVisible: false,
};
export default function dialogReducer(state = initialState, action) {
  switch (action.type) {
    case _CLOSE_DIALOG:
      return initialState;
    case _OPEN_ADDRESS_DIALOG:
      return {
        addAddressDialogVisibile: true,
        addPhoneDialogVisible: false,
        addBookDialogVisible: false,
        changeProfileImageDialogVisible: false,
      };
    case _OPEN_PHONE_DIALOG:
      return {
        addAddressDialogVisibile: false,
        addPhoneDialogVisible: true,
        addBookDialogVisible: false,
        changeProfileImageDialogVisible: false,
      };
    case _OPEN_NEW_BOOK_DIALOG:
      return {
        addAddressDialogVisibile: false,
        addPhoneDialogVisible: false,
        addBookDialogVisible: true,
        changeProfileImageDialogVisible: false,
      };
    case _OPEN_NEW_PROFILE_IMAGE_DIALOG:
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
