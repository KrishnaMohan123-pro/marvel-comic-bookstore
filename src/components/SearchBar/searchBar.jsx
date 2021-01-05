import React, { useState, Fragment } from "react";
import Dropdown from "./dropdownOptions";
import DebounceInput from "react-debounce-input";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [redirect, setRedirect] = useState(false);
  console.log(redirect);
  if (redirect) {
    return <Redirect to={"/characters/q=" + search} />;
  }
  return (
    <Fragment style={{ position: "relative" }}>
      <Paper
        className="search-form"
        component="form"
        elevation={2}
        style={{
          padding: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "30rem",
          marginLeft: "30px",
          height: "35px",
        }}
        onSubmit={(e) => {
          if (search.length < 2) toast.error("Please add more letters");
          setRedirect(true);
        }}
      >
        <DebounceInput
          debounceTimeout={300}
          onChange={(event) => {
            setShowResult(false);
            setSearch(event.target.value);
            setShowResult(true);
          }}
          placeholder="Search"
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

      {showResult && search.length > 2 ? <Dropdown name={search} /> : null}
    </Fragment>
  );
}
