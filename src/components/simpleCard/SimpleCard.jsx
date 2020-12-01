import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const useStyles = makeStyles({
  root: {
    width: "250px",
    margin: "5px auto",
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
export default function SimpleCard(props) {
  const userID = useSelector((state) => state.firebase.auth.uid);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  useFirestoreConnect(() => [{ collection: "users", doc: userID }]);
  const data = useSelector(
    ({ firestore: { data } }) => data.users && data.users[userID]
  );

  if (!loggedIn) {
    var button = (
      <Button
        onClick={() => {
          toast("Please Login or Signup first");
        }}
      >
        Add to cart
      </Button>
    );
  }
  if (!isLoaded(data)) {
    return <p>Loading</p>;
  }

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.title.length > 20
            ? props.title.slice(0, 20) + "..."
            : props.title}
        </Typography>
        <div className="series-image">
          <img src={props.img} style={{ width: "200px", height: "200px" }} />
        </div>
        <Typography className={classes.pos} color="textSecondary">
          Start Year - {props.startYear}
          <br />
          End Year - {props.endYear}
        </Typography>
      </CardContent>
      <CardActions>
        {!props.enablePurchase ? (
          button
        ) : props.type === "series" ? (
          <Link to={"/series/" + props.id}>
            <Button size="small">Know More</Button>
          </Link>
        ) : (
          <Link to={"/character/" + props.id}>
            <Button size="small">Know More</Button>
          </Link>
        )}
      </CardActions>
    </Card>
  );
}
