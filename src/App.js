import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/elements/Navbar";
import Products from "./components/products/Products";
import {  Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProduct from "./components/products/AddProduct";
import EditProduct  from "./components/products/EditProduct";
import Login from "./components/login/Login";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/product" component={Products} />
                <Route exact path="/products/add" component={AddProduct} />
                <Route
                  exact
                  path="/products/edit/:id"
                  component={EditProduct}
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
