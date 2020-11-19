import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import { addToCart, removeFromCart } from "../../actions/cartActions";

export default function CartCard(props) {
  const dispatch = useDispatch();
  const doc = useSelector((state) => state);
  const userID = doc.firebase.auth.uid;
  useFirestoreConnect(() => [{ collection: "users", doc: userID }]);
  const data = useSelector(
    ({ firestore: { data } }) => data.users && data.users[userID]
  );
  if (!isLoaded(data)) {
    return <p>Loading</p>;
  }

  const cartItemIds = [];
  data.cart.forEach((item) => cartItemIds.push(item.id));
  function handleAdd() {
    dispatch(
      addToCart({
        id: props.id,
        price: props.price,
        img: props.img,
        title: props.title,
      })
    );
  }
  function handleRemove() {
    dispatch(removeFromCart({ id: props.id }));
  }
  let button = !cartItemIds.includes(props.id) ? (
    <button className="btn btn-primary" onClick={handleAdd}>
      Add to cart
    </button>
  ) : (
    <button className="btn btn-warning" onClick={handleRemove}>
      Remove from cart
    </button>
  );
  return (
    <div className="container">
      <div className="cart-item row">
        <div className="book col-4">
          <img className="book-image" src={props.img} />
        </div>
        <div className="book book-title col-5 align-self-center">
          <p>{props.title}</p>
        </div>
        <div className="book book-price col-3">
          <p>{"$ " + props.price}</p>
          <div>{button}</div>
        </div>
      </div>
    </div>
  );
}
