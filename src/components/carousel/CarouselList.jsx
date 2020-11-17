import React, { useState, useEffect } from "react";
import Carousel from "nuka-carousel";
import Card from "./Card";
import { fetchComicsByCharacterId } from "../../actions/dataFetch";
export default function CarouselList(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchComicsByCharacterId(props.id).then((doc) => setData(doc.data.results));
  }, []);
  if (data.length === 0) {
    return (
      <div class="spinner-grow text-warning" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  }
  //   data.map((item) => console.log(item.thumbnail.extension));
  return (
    // <div>Show books</div>
    <Carousel slidesToShow={2}>
      {data.map((item) => (
        <Card
          id={item.id}
          key={item.id}
          img={item.thumbnail.path + "." + item.thumbnail.extension}
          price={item.prices.price}
          title={item.title}
        />
      ))}
    </Carousel>
  );
}
