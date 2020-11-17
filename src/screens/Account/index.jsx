import React from "react";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import { useSelector } from "react-redux";
export default function Account() {
  useFirestoreConnect(() => [{ collection: "test", doc: "01" }]);
  const data = useSelector(
    ({ firestore: { data } }) => data.test && data.test["01"]
  );
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
      <p>{data.fname}</p>
      <p>{data.lname}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p>
      <p>{data.address}</p>
    </div>
  );
}
