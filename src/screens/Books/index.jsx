import React, { useState, useEffect } from "react";
import characterNames from "../../utility/characters/data";
import "./styles.css";
import CarouselList from "../../components/carousel/Carousel";

export default function Books() {
  return (
    <div>
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
