import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Bookcard(props) {
  const dispatch = useDispatch();
  const doc = useSelector((state) => state);
  const userID = doc.firebase.auth.uid;
  useFirestoreConnect(() => [{ collection: "users", doc: userID }]);
  const data = useSelector(
    ({ firestore: { data } }) => data.users && data.users[userID]
  );

  let title = props.title;
  if (props.title.length > 25) {
    title = props.title.substring(0, 20) + "...";
  }

  if (doc.firebase.auth.isEmpty) {
    return (
      <div class="card">
        <Link to={"/book/" + props.id}>
          <img src={props.img} class="card-img-top" alt="..." />
        </Link>
        <div class="card-body">
          <Link to={"/book/" + props.id}>
            <h5 class="card-title">{title}</h5>
          </Link>
          <p class="card-text">Price: ${props.price}</p>
          <button
            onClick={() => {
              toast("Please Login or Signup first");
            }}
            className="btn btn-primary"
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }

  if (!isLoaded(data)) {
    return <p>Loading</p>;
  }

  if (isEmpty(data)) {
    return (
      <div class="card">
        <Link to={"/book/" + props.id}>
          <img src={props.img} class="card-img-top" alt="..." />
        </Link>
        <div class="card-body">
          <Link to={"/book/" + props.id}>
            <h5 class="card-title">{title}</h5>
          </Link>
          <p class="card-text">Price: ${props.price}</p>
          {button}
        </div>
      </div>
    );
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
    if (doc.firebase.auth.isEmpty) {
      toast("Login First");
    }
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
    <div class="card">
      <Link to={"/book/" + props.id}>
        <img src={props.img} class="card-img-top" alt="..." />
      </Link>
      <div class="card-body">
        <Link to={"/book/" + props.id}>
          <h5 class="card-title">{title}</h5>
        </Link>
        <p class="card-text">Price: ${props.price}</p>
        {button}
      </div>
    </div>
  );
}
