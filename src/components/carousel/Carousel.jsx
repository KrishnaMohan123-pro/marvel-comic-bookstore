import React, { useState, useEffect } from "react";
import { fetchIdByName } from "../../actions/dataFetch";
import CarouselList from "./CarouselList";

export default function Carousel(props) {
  const [data, setData] = useState(0);
  useEffect(() => {
    fetchIdByName(props.name).then((doc) => {
      setData(doc.data.results[0].id);
    });
  }, []);
  if (data === 0) {
    return (
      <div class="spinner-grow text-warning" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  }
  return <CarouselList id={data} />;
}
