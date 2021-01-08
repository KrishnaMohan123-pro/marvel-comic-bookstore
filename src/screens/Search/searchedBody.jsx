import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchSeriesByStartName } from "../../actions/dataFetch";
import {
  Button,
  CircularProgress,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loader from "../../components/Loader/loader";

export default function SearchedBody() {
  const [sort, setSort] = useState("");
  const name = useSelector((state) => state.search.name);
  const [data, setData] = useState({});
  const [limit, setlimit] = useState(9);
  const [loader, setLoader] = useState(false);
  console.log(data);
  useEffect(() => {
    setLoader(true);
    fetchSeriesByStartName(name, limit).then((doc) => {
      setData(doc);
      setLoader(false);
    });
  }, [name, limit]);
  if (Object.keys(data).length === 0) {
    return <Loader />;
  }
  function handleSelectChange(e) {
    setSort(e.target.value);
  }
  return (
    <div>
      <FormControl style={{ width: "20rem" }}>
        <InputLabel>Sort</InputLabel>
        <Select value={sort} onChange={handleSelectChange} color="secondary">
          <MenuItem value={10}>Title</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={4} style={{ position: "relative" }}>
        {data.data.results.map((doc) => {
          return (
            <Grid item xl={3} lg={4} md={6} sm={12}>
              <ProductCard
                key={doc.id}
                endYear={doc.endYear}
                id={doc.id}
                img={doc.thumbnail.path + "." + doc.thumbnail.extension}
                startYear={doc.startYear}
                title={doc.title}
                type="series"
              />
            </Grid>
          );
        })}
        {limit > 90 ? null : loader ? (
          <CircularProgress color="secondary" style={{ margin: "2rem auto" }} />
        ) : (
          <Button
            variant="contained"
            color="secondary"
            size="small"
            style={{ margin: "2rem auto" }}
            onClick={(e) => {
              e.preventDefault();
              setlimit((prevValue) => {
                return prevValue + 9;
              });
            }}
          >
            Load More
          </Button>
        )}
      </Grid>
    </div>
  );
}
