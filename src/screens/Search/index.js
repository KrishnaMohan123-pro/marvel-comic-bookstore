import React, { useState, useEffect } from "react";
import { fetchSeriesByName } from "../../actions/dataFetch";

import Input from "../../components/inputs/InputWithButton";
import "./styles.css";

export default function Search() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});
  useEffect(() => {
    fetchSeriesByName("iron man").then((doc) => {
      setData(doc);
    });
  }, []);
  console.log(data);
  function handleChange(e) {
    let value = e.target.value;
    setSearch(value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  console.log(search);
  return (
    <div className="search">
      <div className="container search-bar">
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <Input
            placeholder="Search for your marvel character"
            button="Search"
            name="search"
            handleChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
}
