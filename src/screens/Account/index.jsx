import React from "react";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import { useSelector } from "react-redux";
import ProfileCard from "../../components/profileCard/ProfileCard";

export default function Account() {
  const doc = useSelector((state) => state);
  const userID = doc.firebase.auth.uid;
  useFirestoreConnect(() => [{ collection: "users", doc: userID }]);
  const data = useSelector(
    ({ firestore: { data } }) => data.users && data.users[userID]
  );
  if (doc.firebase.auth.isEmpty) {
    return (
      <p
        style={{ fontFamily: "Goldman", fontSize: "2rem", marginTop: "4.25%" }}
      >
        Please LOGIN or SIGNUP first...
      </p>
    );
  }
  if (!isLoaded(data)) {
    return (
      <div class="spinner-grow text-warning" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  }

  console.log(data);
  return (
    <div>
      <ProfileCard
        fname={data.fname}
        lname={data.lname}
        email={data.email}
        address={data.address}
        phone={data.phone}
      />
    </div>
  );
}
