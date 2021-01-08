import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./screens/Home/index";
import Navbar from "./components/navbar/Navbar";
import Cart from "./screens/Cart/index";
import Books from "./screens/Books/index";
import Account from "./screens/Account/index";
import Book from "./screens/Book";
import Character from "./screens/Character/index";
import Characters from "./screens/Characters/index";
import Search from "./screens/Search";
import Series from "./screens/Series/Series";

function bookDetail({ match }) {
  return <Book id={match.params.book_id} />;
}
function seriesDetail({ match }) {
  return <Series id={match.params.series_id} />;
}
function characterDetail({ match }) {
  return <Character id={match.params.character_id} />;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact strict path="/" render={() => <Home />} />
      <Route exact strict path="/account" render={() => <Account />} />
      <Route exact strict path="/book/:book_id" component={bookDetail} />
      <Route exact strict path="/books" render={() => <Books />} />
      <Route
        exact
        strict
        path="/character/:character_id"
        component={characterDetail}
      />
      <Route exact strict path="/characters/q=:query" component={Characters} />
      <Route exact strict path="/cart" render={() => <Cart />} />
      {/* <Route exact strict path="/characters" render={() => <Characters />} /> */}
      <Route exact strict path="/search" render={() => <Search />} />
      <Route exact strict path="/series/:series_id" component={seriesDetail} />
    </Router>
  );
}

export default App;
