import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import { fetchCharacter } from "../../actions/FetchActions/characterFetchAction";
import Loader from "../../components/Loader/loader";
import { Typography } from "@material-ui/core";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";

export default function Character(props) {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.character);
  const loader = useSelector((state) => state.loader.data);
  console.log(loader);
  useEffect(() => {
    dispatch(fetchCharacter(props.id));
  }, [props.id]);

  if (loader) {
    return <Loader />;
  }
  if (character.error) {
    return <p>{character.error}</p>;
  }

  return (
    <section id="character-body">
      <Typography className="character-name">{character.name}</Typography>
      <Grid container spacing={4}>
        <Grid item lg={3} md={4} sm={12} xs={12}>
          <img
            className="character-image"
            src={character.image}
            style={{ width: "200px", height: "300px", margin: "5px auto" }}
          />
        </Grid>
        <Grid item lg={6} md={8} sm={12} xs={12}>
          <h1 style={{ fontFamily: "Sacramento", margin: "0 auto" }}>
            Description
          </h1>
          <Typography className="character-description">
            {character.description === null ||
            character.description.length === 0
              ? "No Description Available"
              : character.description}
          </Typography>
        </Grid>
        <Grid item lg={3} md={12} sm={12} xs={12}>
          <h3 style={{ fontFamily: "Goldman" }}>Comics</h3>
          <div
            className="comic-link"
            style={{ height: "250px", overflowY: "scroll" }}
          >
            {character.comics.map((comic) => {
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
        <Grid item lg={3} md={12} sm={12} xs={12}>
          <h3 style={{ fontFamily: "Goldman" }}>Series</h3>
          <div
            className="comic-link"
            style={{ height: "250px", overflowY: "scroll" }}
          >
            {character.series.map((series) => {
              return (
                <Link
                  to={"/series/" + series.resourceURI.slice(43)}
                  key={series.resourceURI.slice(43)}
                >
                  <p>
                    {series.name.length > 25
                      ? series.name.slice(0, 25) + "..."
                      : series.name}
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
