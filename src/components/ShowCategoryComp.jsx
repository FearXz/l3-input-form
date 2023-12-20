import React from "react";
import { Col } from "react-bootstrap";
import CardComp from "./CardComp";

function ShowCategoryComp(props) {
  return props.categoryArray.map((book, index) => (
    <Col xs={6} md={4} xl={3} xxl={2} key={`cardBook-${index}`}>
      <CardComp book={book} callbackFunction={props.callbackFunction} />
    </Col>
  ));
}
export default ShowCategoryComp;
