import React from 'react';
import {Link, Switch, Route} from "react-router-dom"
import home from "/home"
import products from "/products"



function App() {
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="/products">products</Link>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
