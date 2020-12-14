import React from "react";
export default function ProfileCard(props) {
  return (
    <div className="profile" style={{ marginTop: "4.3%" }}>
      <div
        className="profile-pic"
        style={{
          backgroundImage: "linear-gradient(tomato,red)",
          height: "20rem",
          width: "100%",
          borderTopRightRadius: "25%",
          borderBottomLeftRadius: "25%",
          position: "relative",
        }}
      >
        <div
          className="profile-img"
          style={{
            borderRadius: "100%",
            height: "15rem",
            width: "15rem",
            border: "white solid 0.5rem",
            position: "absolute",
            left: "40%",
            top: "15%",
          }}
        >
          <img src="../../images/userImage.png" alt="display picture" />
        </div>
      </div>
      <div
        className="profile-card container d-flex justify-content-center"
        style={{ textAlign: "left" }}
      >
        <div
          className="row bg-danger py-5 d-flex justify-content-lest"
          style={{
            width: "60%",
            backgroundImage: "linear-gradient(red, tomato)",
          }}
        >
          <div className="col-4">
            <p>
              <h6>Name: </h6>
              <h3>{props.fname}</h3>
              <h3>{props.lname}</h3>
            </p>
          </div>
          <div className="col-8">
            <p>
              <h6>Email: </h6>
              <h4>{props.email}</h4>
            </p>
            <p>
              <h6>Phone Number: </h6>
              <h4>{props.phone}</h4>
            </p>
            <p>
              <h6>Address: </h6>
              <h4>{props.address}</h4>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
