import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Home() {
  const data = useSelector((state) => state);
  return (
    <section className="home-body" style={{ marginTop: "4.25%" }}>
      <section id="home-message">
        <div className="row no-gutters">
          <div className="secondary-col col-5">
            <p>Welcome to the world of comics</p>
          </div>
          <div className="primary-col col-7">
            <p>MARVEL</p>
          </div>
        </div>
      </section>
      <section id="links">
        <div className="container">
          <div className="row no-gutters p-2">
            <div className="col-4">
              <Link to="/books">
                <p>
                  <i className="fas fa-book-open fa-3x"></i>
                </p>
                <p className="link-text">World of comics</p>
              </Link>
            </div>
            <div className="col-4">
              <Link to="/characters">
                <p>
                  <i className="fas fa-user fa-3x"></i>
                </p>
                <p className="link-text">
                  Any favourite Character?
                  <br />
                  Try me.....
                </p>
              </Link>
            </div>
            <div className="col-4">
              <Link to="/search">
                <p>
                  <i className="fas fa-search fa-3x"></i>
                </p>
                <p className="link-text">Search for your favourite series</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
