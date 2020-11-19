import React, { useState, useEffect, Fragment } from "react";
import { fetchComicsByComicsId } from "../../actions/dataFetch";
import { useDispatch, useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import "./styles.css";

export default function Book(props) {
  const dispatch = useDispatch();
  const doc = useSelector((state) => state);
  const userID = doc.firebase.auth.uid;
  useFirestoreConnect(() => [{ collection: "users", doc: userID }]);
  const firestoreData = useSelector(
    ({ firestore: { data } }) => data.users && data.users[userID]
  );
  const [data, setData] = useState({});
  useEffect(() => {
    fetchComicsByComicsId(props.id).then((doc) => {
      setData(doc);
    });
  }, []);
  if (Object.keys(data).length === 0) {
    return (
      <Fragment>
        <p style={{ fontSize: "1.5rem", fontFamily: "Goldman" }}>Loading...</p>
        <div class="spinner-grow text-warning" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </Fragment>
    );
  }
  let info = data.data.results[0];
  let creators = info.creators.items;
  let characters = info.characters.items;
  console.log(
    info.id,
    info.prices[0].price,
    info.thumbnail.path + "." + info.thumbnail.extension,
    info.title
  );
  const cartItemIds = [];
  firestoreData.cart.forEach((item) => cartItemIds.push(item.id));
  console.log(cartItemIds);
  function handleAdd() {
    dispatch(
      addToCart({
        id: info.id,
        price: info.prices[0].price,
        img: info.thumbnail.path + "." + info.thumbnail.extension,
        title: info.title,
      })
    );
  }
  function handleRemove() {
    dispatch(removeFromCart({ id: info.id }));
  }
  let button = !cartItemIds.includes(info.id) ? (
    <button className="btn btn-primary" onClick={handleAdd}>
      Add to cart
    </button>
  ) : (
    <button className="btn btn-warning" onClick={handleRemove}>
      Remove from cart
    </button>
  );

  return (
    <div className="book-details">
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
            <p>{info.dates[0].date.slice(0, 10)}</p>
          </div>
          <div className="col-3">
            <p>{"$ " + info.prices[0].price}</p>
            {button}
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
          <div className="col-6 charactors">
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
