import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "250px",
    margin: "5px auto",
    backgroundImage: "linear-gradient(#9ad3bc,#fbf6f0)",
    paddingBottom: "4%",
  },
  bullet: {
    display: "inline-block",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 16,
    fontFamily: "Goldman",
  },
  pos: {
    marginBottom: 12,
  },
});
export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className="series-image">
          <img
            src={props.img}
            style={{ width: "200px", height: "200px", marginBottom: "5px" }}
          />
        </div>
        <Typography className={classes.title} color="textPrimary">
          {props.name.length > 15
            ? props.name.slice(0, 15) + "..."
            : props.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={"/character/" + props.id} style={{ margin: "0px auto" }}>
          <Button size="small" variant="contained" color="primary">
            Know More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
