import React, { Fragment } from "react";
export default function ProfileCard(props) {
  return (
    <Fragment>
      <div className="profile-pic-section">
        <img
          className="profile-img"
          src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
          alt="display picture"
        />
      </div>
      <div className="profile-card container d-flex justify-content-center">
        <div className="profile-card-row row bg-danger py-5 d-flex">
          <div className="profile-name col-lg-4">
            <p className="section-label">Name: </p>
            <p className="section-details profile-fname">{props.fname}</p>
            <p className="section-details profile-lname">{props.lname}</p>
          </div>
          <div className="profile-details col-lg-8">
            <div className="profile-email">
              <p className="section-label">Email: </p>
              <p className="section-details email">{props.email}</p>
            </div>
            <div className="profile-phone">
              <p className="section-title">Phone Number: </p>
              <p className="section-details phone">{props.phone}</p>
            </div>
            <div className="profile-address">
              <p className="section-label">Address: </p>
              <p className="section-details address">{props.address}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
