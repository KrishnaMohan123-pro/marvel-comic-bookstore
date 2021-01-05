import React, { useState, useEffect, Fragment } from "react";
import { Grid } from "@material-ui/core";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./styles.css";

import { fetchWithStartName } from "../../actions/dataFetch";
import Loader from "../../components/Loader/loader";
export default function Characters({ match }) {
  console.log(match.params.query);
  const [doc, setDoc] = useState([]);
  useEffect(() => {
    fetchWithStartName(match.params.query).then((res) => {
      setDoc(res.data.results);
    });
  }, []);
  if (doc.length === 0) {
    return <Loader />;
  }
  console.log(doc);
  return (
    <div style={{ marginTop: "10%" }}>
      <Grid container spacing={4}>
        {doc.map((item) => {
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
  // const dispatch = useDispatch();
  // const showSearchBody = useSelector((state) => state.search.showSearchBody);
  // const [search, setSearch] = useState("");
  // function handleChange(e) {
  //   let value = e.target.value;
  //   setTimeout(() => {
  //     setSearch(value);
  //   }, 500);
  //   dispatch({ type: "CLEAR_SEARCH" });
  //   if (value.length !== 0)
  //     dispatch({ type: "SEARCH_START_WITH", payload: { name: value } });
  // }
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   dispatch({ type: "CLEAR_SEARCH" });
  //   setTimeout(() => {
  //     dispatch({ type: "SEARCH_START_WITH", payload: { name: search } });
  //   }, 50);
  // }
  // return (
  //   <Fragment>
  //     <Paper
  //       className="search-form"
  //       component="form"
  //       style={{
  //         padding: "2px 4px",
  //         display: "flex",
  //         alignItems: "center",
  //         width: "500px",
  //         margin: "100px auto",
  //       }}
  //       onSubmit={handleSubmit}
  //     >
  //       <DebounceInput
  //         debounceTimeout={500}
  //         onChange={handleChange}
  //         placeholder="Search for your favourite Marvel Character"
  //         style={{
  //           width: "90%",
  //           marginLeft: "5px",
  //           border: "none",
  //           outline: "none",
  //         }}
  //         minLength={3}
  //         value={search}
  //       />
  //       <IconButton type="submit" aria-label="search">
  //         <SearchIcon />
  //       </IconButton>
  //     </Paper>
  //     {showSearchBody ? <SearchedBody /> : null}
  //   </Fragment>
  // );
}
