import React, { useState, useEffect, Fragment } from "react";
import Button from "@material-ui/core/Button";
import { fetchComicsByComicsId } from "../../actions/dataFetch";
import { useDispatch, useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import "./styles.css";
import Loader from "../../components/Loader/loader";
import NotLoginPage from "./notLoginPage";
import CartButton from "../../components/CartButton/CartButton";

export default function Book(props) {
  const dispatch = useDispatch();

  const [data, setData] = useState({});
  useEffect(() => {
    fetchComicsByComicsId(props.id).then((doc) => {
      setData(doc);
    });
  }, []);
  if (Object.keys(data).length === 0) {
    return <Loader />;
  }

  let info = data.data.results[0];
  let creators = info.creators.items;
  let characters = info.characters.items;

  return (
    <div className="book-details" style={{ marginTop: "5%" }}>
      <p
        className="book-title"
        style={{ fontSize: "3rem", fontFamily: "Goldman" }}
      >
        {info.title}
      </p>
      <div className="container">
        <div className="row">
          <div className="col-4 book-img-container">
            <img
              className="book-img"
              src={info.thumbnail.path + "." + info.thumbnail.extension}
            />
          </div>
          <div className="col-5">
            <p>
              {info.description === null
                ? "No Description Available"
                : info.description}
            </p>
            <p style={{ fontFamily: "Goldman" }}>PUBLISHED ON -</p>
            <p>{info.dates[0].date.slice(0, 10)}</p>
          </div>
          <div className="col-3">
            <p>{"$ " + info.prices[0].price}</p>
            <CartButton
              id={info.id}
              price={info.prices[0].price}
              img={info.thumbnail.path + "." + info.thumbnail.extension}
              title={info.title}
            />
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
                height: "15rem",
              }}
            >
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Role</th>
              </tr>
              {creators.map((creator) => {
                return (
                  <tr key={creator.name}>
                    <td>{creator.name}</td>
                    <td>{creator.role}</td>
                  </tr>
                );
              })}
            </table>
          </div>
          <div
            className="col-6 characters"
            style={{ height: "15rem", overflowY: "scroll" }}
          >
            <p className="column-heading">Charactors</p>
            {characters.map((character) => {
              return <p key={character.name}>{character.name}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}