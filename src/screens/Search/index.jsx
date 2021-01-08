import React, { useState, useEffect, Fragment } from "react";
import DebounceInput from "react-debounce-input";
import Loader from "../../components/Loader/loader";
import {
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Paper,
} from "@material-ui/core";
import Selector from "../../components/Selector/selector";
import { addToList, clearList } from "../../actions/searchActions";
import { Search as SearchIcon } from "@material-ui/icons";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchSeriesByStartName } from "../../actions/dataFetch";
import "./styles.css";

export default function Search() {
  const dispatch = useDispatch();
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [doc, setDoc] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loader, setLoader] = useState(false);
  const [firstFetch, setFirstFetch] = useState(false);
  const seriesList = useSelector((state) => state.search.seriesList);
  const seriesName = useSelector((state) => state.seriesName.name);
  const totalSeries = useSelector((state) => state.totalSeries.total);
  useEffect(() => {
    if (seriesName.length > 2) {
      setLoader(true);
      fetchSeriesByStartName(seriesName, offset, sort, filter).then((res) => {
        dispatch({ type: "SERIES_FOUND", payload: { total: res.data.total } });
        setDoc(res.data.results);
        const list = [];
        res.data.results.forEach((result) => list.push(result));
        dispatch(addToList(list));
        setLoader(false);
        setFirstFetch(false);
      });
    }
  }, [seriesName, offset, sort, filter]);
  const seriesSortOptions = [
    { name: "Title", value: "title" },
    { name: "Modified", value: "modified" },
    { name: "Start Year", value: "startYear" },
    { name: "Title DESC", value: "-title" },
    { name: "Modified DESC", value: "-modified" },
    { name: "Start Year DESC", value: "-startYear" },
  ];

  const seriesFilterOptions = [
    { name: "Comic", value: "comic" },
    { name: "Magazine", value: "magazine" },
    { name: "Digital Comic", value: "digital comic" },
  ];
  function handleChange(e) {
    setOffset(0);
    setFirstFetch(true);
    dispatch({ type: "SEARCHED_NAME", payload: { name: e.target.value } });
    if (e.target.value.length < 2) {
      setFirstFetch(false);
    }
    dispatch(clearList());
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "SEARCHED_NAME", payload: { name: seriesName } });
  }
  function handleFilterChange(e) {
    dispatch(clearList());
    setFirstFetch(true);
    setFilter(e.target.value);
  }
  function handleSortChange(e) {
    dispatch(clearList());
    setFirstFetch(true);
    setSort(e.target.value);
  }
  function clearSortAndFilter() {
    dispatch(clearList());
    setFirstFetch(true);
    setSort("");
    setFilter("");
  }
  return (
    <Fragment>
      <Paper
        component="form"
        style={{
          padding: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "500px",
          margin: "100px auto",
        }}
        onSubmit={handleSubmit}
      >
        <DebounceInput
          debounceTimeout={300}
          onChange={handleChange}
          placeholder="Search for your favourite Marvel Character"
          style={{
            width: "90%",
            marginLeft: "5px",
            border: "none",
            outline: "none",
          }}
          minLength={3}
          value={seriesName}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

      {firstFetch ? (
        <Loader />
      ) : seriesList.length === 0 ? null : (
        <section id="searched-body">
          <div className="sort-and-filter">
            <span className="selector">
              <Selector
                options={seriesSortOptions}
                onChange={handleSortChange}
                value={sort}
                label="SORT"
              />
            </span>
            <span className="selector">
              <Selector
                options={seriesFilterOptions}
                onChange={handleFilterChange}
                value={filter}
                label="FILTER"
              />
            </span>
            {filter.length === 0 && sort.length === 0 ? null : (
              <Button
                className="clear-filter-sort-button"
                size="small"
                onClick={clearSortAndFilter}
                variant="contained"
              >
                Remove All
              </Button>
            )}
          </div>

          <Grid container spacing={4} style={{ position: "relative" }}>
            {seriesList.map((item) => {
              return (
                <Grid item xl={3} lg={4} md={6} sm={12} key={item.id}>
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
          {loader ? (
            <CircularProgress color="secondary" />
          ) : offset + 10 > totalSeries ? null : (
            <Button
              variant="contained"
              onClick={(e) => {
                setOffset((prevValue) => prevValue + 10);

                dispatch({ type: "LOAD MORE", payload: { seriesList: doc } });
              }}
            >
              Load More
            </Button>
          )}
        </section>
      )}
    </Fragment>
  );
}
