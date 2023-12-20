import React from "react";
import NavbarComp from "./NavbarComp";
import { Container } from "react-bootstrap";

function MyHeader(props) {
  return (
    <Container>
      <NavbarComp callbackSubmit={props.callbackSubmit} />
    </Container>
  );
}

export default MyHeader;
