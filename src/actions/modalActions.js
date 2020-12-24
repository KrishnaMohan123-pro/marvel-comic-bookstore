const closeModal = () => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch("CLOSE_MODAL");
  };
};
