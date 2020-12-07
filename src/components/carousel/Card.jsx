import React from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function Card(props) {
  return (
    <section className="book-card">
      <ProductCard
        type="book"
        img={props.img}
        title={props.title}
        price={props.price}
        id={props.id}
      />
    </section>
  );
}
