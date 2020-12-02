import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const useStyles = makeStyles({
  root: {
    width: "250px",
    margin: "5px auto",
    paddingBottom: "5%",
  },
  bullet: {
    display: "inline-block",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Bookcard(props) {
  const dispatch = useDispatch();
  const doc = useSelector((state) => state);
  const userID = doc.firebase.auth.uid;
  useFirestoreConnect(() => [{ collection: "users", doc: userID }]);
  const data = useSelector(
    ({ firestore: { data } }) => data.users && data.users[userID]
  );
  const classes = useStyles();
  let title =
    props.title.length > 20 ? props.title.slice(0, 20) + "..." : props.title;
  if (doc.firebase.auth.isEmpty) {
    return (
      <Card className={classes.root}>
        <CardContent>
          <Link to={"/book/" + props.id}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {props.title.length > 20
                ? props.title.slice(0, 20) + "..."
                : props.title}
            </Typography>
          </Link>
          <div className="series-image">
            <Link to={"/book/" + props.id}>
              <img
                src={props.img}
                style={{ width: "200px", height: "200px" }}
              />
            </Link>
          </div>
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              toast("Please login or Signup first");
            }}
            style={{ margin: "0 auto" }}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    );
  }

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
    if (doc.firebase.auth.isEmpty) {
      toast("Login First");
    }
    dispatch(removeFromCart({ id: props.id }));
  }
  let button = !cartItemIds.includes(props.id) ? (
    <Button
      variant="contained"
      color="primary"
      onClick={handleAdd}
      style={{ margin: "0px auto" }}
    >
      Add to cart
    </Button>
  ) : (
    <Button
      variant="contained"
      color="secondary"
      onClick={handleRemove}
      style={{ margin: "0px auto" }}
    >
      Remove from cart
    </Button>
  );

  return (
    <Card className={classes.root}>
      <CardContent>
        <Link to={"/book/" + props.id}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {props.title.length > 20
              ? props.title.slice(0, 20) + "..."
              : props.title}
          </Typography>
        </Link>
        <div className="series-image">
          <Link to={"/book/" + props.id}>
            {" "}
            <img src={props.img} style={{ width: "200px", height: "200px" }} />
          </Link>
        </div>
      </CardContent>
      <CardActions>{button}</CardActions>
    </Card>
  );
}
