import React from "react";
import Containter from "react-bootstrap/Container"

function Layout(props) {
  return(
    <Containter>
      {props.children}
    </Containter>
  );
};

export default Layout; 