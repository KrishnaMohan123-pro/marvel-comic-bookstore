import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/loader";
import Typography from "@material-ui/core/Typography";
import { fetchSeriesBySeriesID } from "../../actions/dataFetch";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeries } from "../../actions/FetchActions/seriesFetchAction";
import "./styles.css";

export default function Series(props) {
  const series = useSelector((state) => state.series);
  const loader = useSelector((state) => state.loader.data);
  console.log(series);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSeries(props.id));
  }, []);
  //   When Data not loaded
  if (loader) return <Loader />;

  if (series.error) {
    return <p>{series.error}</p>;
  }

  return (
    <section id="series-description">
      <div className="series-title">{series.title}</div>
      <Grid container spacing={3} className="series-container">
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <img className="series-image" src={series.image} />
        </Grid>
        <Grid item lg={5} md={6} sm={12} xs={12}>
          <span className="section-title">Description</span>
          <Typography
            className="series-content"
            color="wheat"
            style={{ margin: "2px auto", width: "80%" }}
          >
            {series.description === null
              ? "No description available"
              : series.description}
          </Typography>
          <Typography style={{ margin: "50px auto" }}>
            <span style={{ fontFamily: "Goldman", fontSize: "1.15rem" }}>
              Start Year -
            </span>
            {series.startYear}
            <br />
            <span style={{ fontFamily: "Goldman", fontSize: "1.15rem" }}>
              End Year -{" "}
            </span>
            {series.endYear}
          </Typography>
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12} className="series-content">
          <Typography
            style={{
              margin: "2px auto",
              fontFamily: "Goldman",
              fontSize: "1.15rem",
            }}
          >
            Characters
          </Typography>
          <div
            style={{ height: "250px", overflowY: "scroll", margin: "2px auto" }}
          >
            {series.characters.map((character) => {
              return <p key={character.name}>{character.name}</p>;
            })}
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        style={{ marginTop: "2rem" }}
        className="series-content"
      >
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <Typography
            style={{
              margin: "2px auto",
              fontFamily: "Goldman",
              fontSize: "1.15rem",
            }}
          >
            Creators
          </Typography>
          <div
            style={{ height: "250px", overflowY: "scroll", margin: "2px auto" }}
          >
            {series.creators.map((creator) => {
              return (
                <p key={creator.name}>{creator.name + "-" + creator.role}</p>
              );
            })}
          </div>
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <Typography
            style={{
              margin: "2px auto",
              fontFamily: "Goldman",
              fontSize: "1.15rem",
            }}
          >
            Comics
          </Typography>
          <div
            className="comic-link"
            style={{ height: "250px", overflowY: "scroll", margin: "2px auto" }}
          >
            {series.comics.map((comic) => {
              return (
                <Link
                  to={"/book/" + comic.resourceURI.slice(43)}
                  key={comic.name}
                >
                  <p>
                    {comic.name.length > 30
                      ? comic.name.slice(0, 30) + "..."
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
