import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { fetchCharacterByCharacterId } from "../../actions/dataFetch";
import Loader from "../../components/Loader/loader";
import { Typography } from "@material-ui/core";
import "./styles.css";

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
    <section id="character-body">
      <Typography className="character-name">{result.name}</Typography>
      <Grid container spacing={4}>
        <Grid item lg={3} md={4} sm={12} xs={12}>
          <img
            className="character-image"
            src={result.thumbnail.path + "." + result.thumbnail.extension}
            style={{ width: "200px", height: "300px", margin: "5px auto" }}
          />
        </Grid>
        <Grid item lg={6} md={8} sm={12} xs={12}>
          <h1 style={{ fontFamily: "Sacramento", margin: "0 auto" }}>
            Description
          </h1>
          <Typography className="character-description">
            {result.description === null || result.description.length === 0
              ? "No Description Available"
              : result.description}
          </Typography>
        </Grid>
        <Grid item lg={3} md={12} sm={12} xs={12}>
          <h3 style={{ fontFamily: "Goldman" }}>Comics</h3>
          <div style={{ height: "250px", overflowY: "scroll" }}>
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
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
