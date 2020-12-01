import React, { useState, useEffect } from "react";
import { fetchIdByName } from "../../actions/dataFetch";
import CarouselList from "./CarouselList";
import Loader from "../Loader/loader";

export default function Carousel(props) {
  const [data, setData] = useState(0);
  useEffect(() => {
    fetchIdByName(props.name).then((doc) => {
      setData(doc.data.results[0].id);
    });
  }, []);
  if (data === 0) {
    return <Loader />;
  }
  return (
    <div className="container d-flex justify-content-center">
      <CarouselList id={data} />
    </div>
  );
}
