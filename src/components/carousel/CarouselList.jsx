import React, { useState, useEffect } from "react";
import Carousel from "nuka-carousel";
import Card from "./Card";
import { fetchComicsByCharacterId } from "../../actions/dataFetch";
import Loader from "../Loader/loader";
export default function CarouselList(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchComicsByCharacterId(props.id).then((doc) => setData(doc.data.results));
  }, []);
  if (data.length === 0) {
    return <Loader />;
  }
  return (
    <Carousel
      slidesToShow={3}
      speed={1000}
      dragging={false}
      autoGenerateStyleTag={true}
      pauseOnHover={true}
      wrapAround={true}
      width={"100%"}
      scrollMode={"page"}
      defaultControlsConfig={{
        nextButtonText: <i class="fas fa-caret-right fa-3x"></i>,
        prevButtonText: <i class="fas fa-caret-left fa-3x"></i>,
        pagingDotsStyle: {
          fill: "gold",
        },
      }}
    >
      {data.map((item) => (
        <Card
          id={item.id}
          key={item.id}
          img={item.thumbnail.path + "." + item.thumbnail.extension}
          price={item.prices[0].price}
          title={item.title}
        />
      ))}
    </Carousel>
  );
}
