import React from "react";
import Button from "@material-ui/core/Button";
import { toast } from "react-toastify";

export default function NotLoginPage(props) {
  return (
    <div className="book-details" style={{ marginTop: "5%" }}>
      <p
        className="book-title"
        style={{ fontSize: "3rem", fontFamily: "Goldman" }}
      >
        {props.title}
      </p>
      <div className="container">
        <div className="row">
          <div className="col-4 book-img-container">
            <img className="book-img" src={props.img} />
          </div>
          <div className="col-5">
            <p>
              {props.description === null
                ? "No Description Available"
                : props.description}
            </p>
            <p style={{ fontFamily: "Goldman" }}>PUBLISHED ON -</p>
            <p>{props.date.slice(0, 10)}</p>
          </div>
          <div className="col-3">
            <p>{"$ " + props.price}</p>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                toast("Please Login or Signup first");
              }}
            >
              Add to cart
            </Button>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-6 creators" style={{ textAlign: "center" }}>
            <p className="column-heading">Creators</p>
            <table
              className="table table-borderless table-responsive"
              style={{
                textAlign: "left",
                color: "wheat",
                overflowY: "scroll",
                height: "20rem",
              }}
            >
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Role</th>
              </tr>
              {props.creators.map((creator) => {
                return (
                  <tr key={creator.name}>
                    <td>{creator.name}</td>
                    <td>{creator.role}</td>
                  </tr>
                );
              })}
            </table>
          </div>
          <div className="col-6 charactors">
            <p className="column-heading">Charactors</p>
            {props.characters.map((character) => {
              return <p key={character.name}>{character.name}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
