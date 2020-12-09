import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchSeriesByName } from "../../actions/dataFetch";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function SearchedBody() {
  const name = useSelector((state) => state.search.name);
  const [data, setData] = useState({});
  useEffect(() => {
    fetchSeriesByName(name).then((doc) => setData(doc));
  }, []);
  if (Object.keys(data).length === 0) {
    return <CircularProgress color="secondary" />;
  }
  let items = data.data.results;
  return (
    <div>
      <Grid container spacing={4}>
        {items.map((item) => {
          return (
            <Grid item key={item.id} xl={3} lg={4} md={6} sm={12}>
              <ProductCard
                endYear={item.endYear}
                id={item.id}
                img={item.thumbnail.path + "." + item.thumbnail.extension}
                startYear={item.startYear}
                title={item.title}
                type="series"
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
