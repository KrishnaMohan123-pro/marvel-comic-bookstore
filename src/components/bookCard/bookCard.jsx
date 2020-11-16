import React from "react";

export default function Bookcard(props) {
  return (
    <div class="card">
      <img src={props.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">Price: ${props.price}</p>
        <a href="#" class="btn btn-primary">
          Add
        </a>
      </div>
    </div>
  );
}
