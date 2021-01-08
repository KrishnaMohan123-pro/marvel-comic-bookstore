import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/loader";
import Typography from "@material-ui/core/Typography";
import { fetchSeriesBySeriesID } from "../../actions/dataFetch";
import "./styles.css";

export default function Series(props) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchSeriesBySeriesID(props.id).then((doc) => setData(doc));
  }, []);
  //   When Data not loaded
  if (Object.keys(data).length === 0) {
    return <Loader />;
  }
  let result = data.data.results[0];

  return (
    <section id="series-description">
      <div className="series-title">{result.title}</div>
      <Grid container spacing={3} className="series-container">
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <img
            className="series-image"
            src={result.thumbnail.path + "." + result.thumbnail.extension}
          />
        </Grid>
        <Grid item lg={5} md={6} sm={12} xs={12}>
          <span className="section-title">Description</span>
          <Typography
            className="series-content"
            color="wheat"
            style={{ margin: "2px auto", width: "80%" }}
          >
            {result.description === null
              ? "No description available"
              : result.description}
          </Typography>
          <Typography color="wheat" style={{ margin: "50px auto" }}>
            <span style={{ fontFamily: "Goldman", fontSize: "1.15rem" }}>
              Start Year -
            </span>
            {result.startYear}
            <br />
            <span style={{ fontFamily: "Goldman", fontSize: "1.15rem" }}>
              End Year -{" "}
            </span>
            {result.endYear}
          </Typography>
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12} className="series-content">
          <Typography
            color="wheat"
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
            {result.characters.items.map((character) => {
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
            color="wheat"
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
            {result.creators.items.map((creator) => {
              return (
                <p key={creator.name}>{creator.name + "-" + creator.role}</p>
              );
            })}
          </div>
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <Typography
            color="wheat"
            style={{
              margin: "2px auto",
              fontFamily: "Goldman",
              fontSize: "1.15rem",
            }}
          >
            Comics
          </Typography>
          <div
            style={{ height: "250px", overflowY: "scroll", margin: "2px auto" }}
          >
            {result.comics.items.map((comic) => {
              return (
                <p key={comic.name}>
                  <Link to={"/book/" + comic.resourceURI.slice(43)}>
                    {comic.name.length > 30
                      ? comic.name.slice(0, 30) + "..."
                      : comic.name}
                  </Link>
                </p>
              );
            })}
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
