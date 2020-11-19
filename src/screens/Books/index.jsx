import React from "react";
import characterNames from "../../utility/characters/data";
import "./styles.css";
import CarouselList from "../../components/carousel/Carousel";
export default function Books() {
  return (
    <div>
      {/* <Bookcard img="" price="2.99" title="Iron Man (2020) #8" /> */}
      {characterNames.map((item) => {
        return (
          <div className="character-section" key={item}>
            <p className="character-name">{item.toUpperCase()}</p>
            <CarouselList name={item} />
          </div>
        );
      })}
    </div>
  );
}
