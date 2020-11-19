import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import { addToCart, removeFromCart } from "../../actions/cartActions";

export default function Button(props) {
  const dispatch = useDispatch();
  const doc = useSelector((state) => state);
  const userID = doc.firebase.auth.uid;
  useFirestoreConnect(() => [{ collection: "users", doc: userID }]);
  const data = useSelector(
    ({ firestore: { data } }) => data.users && data.users[userID]
  );
  if (!isLoaded(data)) {
    return null;
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
  let button = cartItemIds.includes(props.id) ? (
    <button className="btn btn-warning" onClick={handleRemove}>
      Remove from cart
    </button>
  ) : (
    <button className="btn btn-primary" onClick={handleAdd}>
      Add to cart
    </button>
  );

  return { button };
}
