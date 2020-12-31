import React, { useState, useEffect, Fragment } from "react";
import DebounceInput from "react-debounce-input";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import SearchedBody from "./searchedBody";

export default function Search() {
  const dispatch = useDispatch();
  const showSearchBody = useSelector((state) => state.search.showSearchBody);
  const [search, setSearch] = useState("");
  function handleChange(e) {
    let value = e.target.value;
    setSearch(value);
    dispatch({ type: "CLEAR_SEARCH" });
    if (value.length > 2) {
      dispatch({ type: "SEARCH_START_WITH", payload: { name: value } });
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "CLEAR_SEARCH" });
    setTimeout(() => {
      dispatch({ type: "SEARCHED", payload: { name: search } });
    }, 50);
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
          value={search}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      {showSearchBody ? <SearchedBody /> : null}
    </Fragment>
    // <div className="search">
    //   <div className="container search-bar">
    //     <form style={{ width: "100%" }} onSubmit={handleSubmit}>
    //       <Input
    //         placeholder="Search for your marvel character"
    //         button="Search"
    //         name="search"
    //         handleChange={handleChange}
    //         value={search}
    //       />
    //       <TextField
    //         className="mt-2"
    //         color="primary"
    //         id="email"
    //         label="Email"
    //         style={{ width: "100%" }}
    //         variant="outlined"
    //         onChange={handleChange}
    //       />
    //     </form>
    //     {showSearchBody ? <SearchedBody /> : null}
    //   </div>
    // </div>
  );
}
