import React from "react";
import BookCard from "../bookCard/bookCard";

export default function Card(props) {
  return (
    <section>
      <BookCard
        img={props.img}
        title={props.title}
        price={props.price}
        id={props.id}
      />
    </section>
  );
}
