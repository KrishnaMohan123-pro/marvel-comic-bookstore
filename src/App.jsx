import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import Footer from "./components/Footer/footer";
import BackdropLoader from "./components/BackdropLoader/backdropLoader";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

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
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <ProtectedRoute component={Account} path="/account" exact={true} />
        <Route exact path="/popular" render={() => <Books />} />
        <Route exact path="/book/:book_id" component={bookDetail} />
        <Route exact path="/search/q=:query" component={Characters} />
        <Route
          exact
          path="/character/:character_id"
          component={characterDetail}
        />
        <ProtectedRoute component={Cart} path="/cart" exact={true} />
        <Route exact path="/series/:series_id" component={seriesDetail} />
        <Route
          path="*"
          exact
          component={() => {
            return (
              <p>
                404!!
                <br />
                Page Not Found
              </p>
            );
          }}
        />
      </Switch>
      <Footer />
      <BackdropLoader />
    </Router>
  );
}
export default App;
