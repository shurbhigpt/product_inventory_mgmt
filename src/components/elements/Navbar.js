import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../reducers/productAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const hist = location.pathname;
  var user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <h3 className="navbar-brand"> Welcome</h3>
        {user && <h3 className="navbar-brand" > {user.name}</h3>}
        {hist == "/product" && (
          <Link to="/products/add" className="btn btn-light ml-auto">
            Add Project
          </Link>
        )}
        {hist != "/" && (
          <div style={{ marginLeft: "2%" }}>
            <Link 
              to="/"
              className="btn btn-light ml-auto"
              onClick={() => dispatch(logout())}
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
