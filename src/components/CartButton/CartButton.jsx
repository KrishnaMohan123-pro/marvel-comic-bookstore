import React from "react";
import Button from "@material-ui/core/Button";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart, removeFromCart } from "../../actions/cartActions";

export default function CartButton(props) {
  const dispatch = useDispatch();
  const isEmpty = useSelector((state) => state.firebase.auth.isEmpty);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const userId = useSelector((state) => state.firebase.auth.uid);
  useFirestoreConnect(() => [{ collection: "users", doc: userId }]);
  const data = useSelector(
    ({ firestore: { data } }) => data.users && data.users[userId]
  );
  if (!loggedIn) {
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          toast("Log in to add item in the cart");
        }}
        style={{ margin: "0px auto" }}
      >
        Add to cart
      </Button>
    );
  }
  if (!isLoaded(data)) {
    return <p>Loading</p>;
  }
  const cartItemsIds = [];
  data.cart.forEach((item) => cartItemsIds.push(item.id));
  let included = false;
  if (cartItemsIds.includes(props.id)) included = true;

  function handleAdd() {
    if (isEmpty) {
      toast("Login to add items to cart");
    }
    dispatch(
      addToCart(userId,{
        id: props.id,
        img: props.img,
        price: props.price,
        title: props.title,
      })
    );
  }
  function handleRemove() {
    dispatch(removeFromCart(userId,{ id: props.id }));
  }
  function onButtonClick() {
    if (included) handleRemove();
    else handleAdd();
  }
  return (
    <Button
      onClick={onButtonClick}
      color={included ? "secondary" : "primary"}
      variant="contained"
      style={{ margin: "0px auto" }}
    >
      {included ? "Remove from cart" : "Add to Cart"}
    </Button>
  );
}
