import React, { useState, useEffect } from "react";
import { Button, Grid, Container } from "@material-ui/core";
import ProductCard from "../../components/ProductCard/ProductCard";
import Selector from "../../components/Selector/selector";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/Loader/loader";
import { search } from "../../actions/FetchActions/searchAction";

export default function Characters({ match }) {
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.loader.data);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("characters");
  const genericSearchResult = useSelector((state) => state.genericSearch);
  console.log(genericSearchResult);
  useEffect(() => {
    dispatch(search(match.params.query, sort, filter));
  }, [match.params.query, sort, filter]);
  const characterSortOptions = [
    { name: "Name", value: "name" },
    { name: "Modified", value: "modified" },
    { name: "Name DESC", value: "-name" },
    { name: "Modified DESC", value: "-modified" },
  ];
  const comicsSortOptions = [
    { name: "Title", value: "title" },
    { name: "Modified", value: "modified" },
    { name: "On Sale Date", value: "onsaleDate" },
    { name: "Title DESC", value: "-title" },
    { name: "Modified DESC", value: "-modified" },
    { name: "On Sale Date DESC", value: "-onsaleDate" },
  ];
  const seriesSortOptions = [
    { name: "Title", value: "title" },
    { name: "Modified", value: "modified" },
    { name: "Start Year", value: "startYear" },
    { name: "Title DESC", value: "-title" },
    { name: "Modified DESC", value: "-modified" },
    { name: "Start Year DESC", value: "-startYear" },
  ];
  const sortOptions =
    filter === "characters"
      ? characterSortOptions
      : filter === "comics"
      ? comicsSortOptions
      : seriesSortOptions;
  const filterOptions = [
    { name: "Characters", value: "characters" },
    { name: "Series", value: "series" },
    { name: "Comics", value: "comics" },
  ];
  function handleSortChange(e) {
    setSort(e.target.value);
  }
  function handleFilterChange(e) {
    setSort("");
    setFilter(e.target.value);
  }
  function clearSortAndFilter() {
    setSort("");
    setFilter("characters");
  }
  if (loader) {
    return <Loader />;
  }
  if (genericSearchResult.total === 0) {
    return <p>No Data found</p>;
  }
  console.log(genericSearchResult.results[0]);

  return (
    <section id="searched-body" style={{ marginTop: "1.5rem" }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item lg={2} style={{ border: "0.1rem grey solid" }}>
            <Grid container direction="column" spacing={4}>
              <Grid item>
                <span>
                  <Selector
                    options={sortOptions}
                    onChange={handleSortChange}
                    value={sort}
                    label="SORT"
                  />
                </span>
              </Grid>
              <Grid item>
                <span>
                  <Selector
                    options={filterOptions}
                    onChange={handleFilterChange}
                    value={filter}
                    label="FILTER"
                  />
                </span>
              </Grid>
              <Grid item>
                {sort.length === 0 || filter === "characters" ? null : (
                  <Button
                    size="small"
                    onClick={clearSortAndFilter}
                    variant="contained"
                  >
                    Remove
                  </Button>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={10} style={{ border: "0.1rem grey solid" }}>
            {loader ? (
              <Loader />
            ) : genericSearchResult.total === 0 ? (
              <p>No Data found</p>
            ) : (
              <div>
                <Grid container spacing={4}>
                  {genericSearchResult.results.map((item) => {
                    return (
                      <Grid
                        item
                        key={item.id}
                        xl={3}
                        lg={4}
                        md={6}
                        sm={12}
                        xs={12}
                      >
                        <ProductCard
                          type={
                            filter === "characters"
                              ? "character"
                              : filter === "comics"
                              ? "book"
                              : filter
                          }
                          endYear={item.endYear}
                          id={item.id}
                          img={
                            item.thumbnail.path + "." + item.thumbnail.extension
                          }
                          price={item.prices && item.prices[0].price}
                          title={item.name ? item.name : item.title}
                          startYear={item.startYear}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </div>
            )}
          </Grid>
        </Grid>
      </Container>
    </section>
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
