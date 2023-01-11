import React from "react";
import "./Home.css";

function Navbar({ children, ...restProps }) {
  return <nav {...restProps}>{children}</nav>;
}

export default Navbar;
