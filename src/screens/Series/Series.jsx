import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
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
    return <CircularProgress color="secondary" style={{ marginTop: "25%" }} />;
  }
  let result = data.data.results[0];
  console.log(result);

  return (
    <section id="series-description" style={{ marginTop: "5%" }}>
      <div className="series-title">{result.title}</div>
      <Grid container spacing={3} style={{ marginTop: "2rem" }}>
        <Grid item lg={4}>
          <img
            src={result.thumbnail.path + "." + result.thumbnail.extension}
            style={{ width: "200px", height: "300px" }}
          />
        </Grid>
        <Grid item lg={5}>
          <span style={{ fontFamily: "Sacramento", fontSize: "3rem" }}>
            Description
          </span>
          <Typography
            color="wheat"
            style={{ margin: "2px auto", width: "500px" }}
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
        <Grid item lg={3}>
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
      <Grid container spacing={2} style={{ marginTop: "2rem" }}>
        <Grid item lg={3}>
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
        <Grid item lg={4}>
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
