import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./screens/Home/index";
import Navbar from "./components/navbar/Navbar";
import Cart from "./screens/Cart/index";
import Books from "./screens/Books/index";
import Account from "./screens/Account/index";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact strict path="/" render={() => <Home />} />
      <Route exact strict path="/cart" render={() => <Cart />} />
      <Route exact strict path="/books" render={() => <Books />} />
      <Route exact strict path="/account" render={() => <Account />} />
    </Router>
  );
}

export default App;
