import React from "react";
// Steteless Functional Component
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <p className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </p>
    </nav>
  );
};

export default NavBar;
