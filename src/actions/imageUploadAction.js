import { updatePhoto } from "./actionCreators/authActionCreators";

export function uploadImage(image) {
  return async (dispatch, getState, { getFirebase }) => {
    const uid = getState().auth.uid;
    const firebase = getFirebase();
    var uploadTask = firebase
      .storage()
      .ref(`profileImage`)
      .child(`${uid}`)
      .put(image);
    uploadTask.on(
      "stage_changed",
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error);
      },
      async () => {
        firebase
          .storage()
          .ref(`profileImage`)
          .child(`${uid}`)
          .getDownloadURL()
          .then(async (url) => {
            const token = await firebase
              .firestore()
              .collection("users")
              .doc(uid)
              .update({ photoURL: url })
              .then(() => {
                return true;
              });
            if (token) {
              dispatch(updatePhoto(url));
              dispatch({ type: "CLOSE_DIALOG" });
            }
          });
      }
    );
  };
}
