import React, { Fragment } from "react";
import Bookcard from "../../components/bookCard/bookCard";
import characterNames from "../../utility/characters/data";
import "./styles.css";
export default function Books() {
  return (
    <div>
      {/* <Bookcard img="" price="2.99" title="Iron Man (2020) #8" /> */}
      {characterNames.map((item) => {
        return (
          <Fragment>
            <p className="character-name" key={item}>
              {item}
            </p>
          </Fragment>
        );
      })}
    </div>
  );
}
