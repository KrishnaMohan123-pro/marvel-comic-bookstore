import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { fetchCharacterByCharacterId } from "../../actions/dataFetch";
import Loader from "../../components/Loader/loader";
import { Typography } from "@material-ui/core";

export default function Character(props) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchCharacterByCharacterId(props.id).then((doc) => setData(doc));
  }, []);

  if (Object.keys(data).length === 0) {
    return <Loader />;
  }
  if (data.data.results.length === 0) {
    return (
      <p style={{ marginTop: "25%" }}>
        Sorry
        <br />
        Still in progress
      </p>
    );
  }
  let result = data.data.results[0];

  return (
    <section style={{ marginTop: "5%" }}>
      <Typography style={{ fontFamily: "Goldman", fontSize: "3.5rem" }}>
        {result.name}
      </Typography>
      <Grid container spacing={4}>
        <Grid item lg={3}>
          <img
            src={result.thumbnail.path + "." + result.thumbnail.extension}
            style={{ width: "200px", height: "300px", margin: "5px auto" }}
          />
        </Grid>
        <Grid item lg={6}>
          <h1 style={{ fontFamily: "Sacramento" }}>Description</h1>
          <Typography>
            {result.description === null || result.description.length === 0
              ? "No Description Available"
              : result.description}
          </Typography>
        </Grid>
        <Grid item lg={3} style={{ height: "250px", overflowY: "scroll" }}>
          <h3 style={{ fontFamily: "Goldman" }}>Comics</h3>
          {result.comics.items.map((comic) => {
            return (
              <Link
                to={"/book/" + comic.resourceURI.slice(43)}
                key={comic.resourceURI.slice(43)}
              >
                <p>
                  {comic.name.length > 25
                    ? comic.name.slice(0, 25) + "..."
                    : comic.name}
                </p>
              </Link>
            );
          })}
        </Grid>
      </Grid>
    </section>
  );
}
