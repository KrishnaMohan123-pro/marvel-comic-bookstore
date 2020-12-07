import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchWithStartName } from "../../actions/dataFetch";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

import ProductCard from "../../components/ProductCard/ProductCard";

export default function SearchedBody() {
  const name = useSelector((state) => state.search.name);
  const [data, setData] = useState({});
  useEffect(() => {
    fetchWithStartName(name).then((doc) => setData(doc));
  }, []);
  if (Object.keys(data).length === 0) {
    return <CircularProgress color="secondary" />;
  }
  if (data.data.count === 0) {
    return <p style={{ marginTop: "20%" }}>No Character Available</p>;
  }
  console.log(name, data);
  let items = data.data.results;
  return (
    // <p>search body</p>
    <div>
      <Grid container spacing={4}>
        {items.map((item) => {
          return (
            <Grid item key={item.id} xl={3} lg={4} md={6} sm={12} xs={12}>
              <ProductCard
                type="character"
                endYear={item.endYear}
                id={item.id}
                img={item.thumbnail.path + "." + item.thumbnail.extension}
                title={item.name}
                startYear={item.startYear}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
