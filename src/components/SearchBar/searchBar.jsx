import React, { useState, useEffect } from "react";
import DebounceInput from "react-debounce-input";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import {
  dropDown,
  clearDropDown,
} from "../../actions/FetchActions/searchAction";
import { useDispatch, useSelector } from "react-redux";

export default function SearchBar() {
  const dispatch = useDispatch();

  const history = useHistory();

  const [showDropDown, setShowDropDown] = useState(false);
  const dropDownOptions = useSelector((state) => state.dropDown);
  const query = useSelector((state) => state.query);
  const [name, setName] = useState(query);
  useEffect(() => {
    setName(query);
  }, [query]);
  console.log(`name:${name}`, `query:${query}`);
  function onInputChange(event) {
    setName(event.target.value);
    setShowDropDown(true);
    dispatch(clearDropDown());
    if (event.target.value.length > 0) dispatch(dropDown(event.target.value));
  }
  function onFormSubmit(e) {
    e.preventDefault();
    setShowDropDown(false);

    if (name.length > 0) {
      history.push(`/search/q=${name}`);
    }
  }

  return (
    <div style={{ position: "relative" }}>
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
            if (event.target.value.length === 0) {
              dispatch(clearDropDown());
            } else onInputChange(event);
          }}
          placeholder="Search"
          style={{
            width: "90%",
            marginLeft: "5px",
            border: "none",
            outline: "none",
          }}
          value={name}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      {showDropDown && dropDownOptions.characters.length !== 0 ? (
        <span
          style={{
            height: "10rem",
            overflowY: "scroll",
            position: "absolute",
            width: "30rem",
            left: "6%",
            backgroundColor: "white",
          }}
        >
          <Table>
            <TableBody>
              {dropDownOptions.characters.map((character) => {
                return (
                  <TableRow key={character.id}>
                    <TableCell component="th">
                      <a
                        href={"/character/" + character.id}
                        style={{ color: "black" }}
                      >
                        {character.name}
                      </a>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </span>
      ) : null}

      {/* {formSubmit ? null : showResult && search.length > 2 ? (
        <Dropdown name={search} />
      ) : null} */}
    </div>
  );
}
