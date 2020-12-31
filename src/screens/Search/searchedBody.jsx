import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchSeriesByStartName } from "../../actions/dataFetch";
import Grid from "@material-ui/core/Grid";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loader from "../../components/Loader/loader";

export default function SearchedBody() {
  const name = useSelector((state) => state.search.name);
  const [data, setData] = useState({});

  useEffect(() => {
    fetchSeriesByStartName(name).then((doc) => {
      setData(doc);
    });
  }, []);

  if (Object.keys(data).length === 0) {
    return <Loader />;
  }
  return (
    <Grid container spacing={4}>
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
    </Grid>
  );
}
