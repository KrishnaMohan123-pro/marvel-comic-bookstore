import React, { useState } from "react";
import Dropdown from "./dropdownOptions";
import DebounceInput from "react-debounce-input";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function SearchBar() {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);
  function onFormSubmit(e) {
    e.preventDefault();
    setFormSubmit(true);
    if (search.length < 2) toast.error("Please add more letters");
    else {
      history.push(`/characters/q=${search}`);
    }
  }
  return (
    <span style={{ position: "relative" }}>
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
          onFormSubmit(e);
        }}
      >
        <DebounceInput
          debounceTimeout={300}
          onChange={(event) => {
            setFormSubmit(false);
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

      {formSubmit ? null : showResult && search.length > 2 ? (
        <Dropdown name={search} />
      ) : null}
    </span>
  );
}
