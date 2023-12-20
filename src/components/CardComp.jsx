import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

function CardComp(props) {
  const [selected, setSelected] = useState(false);

  function toggleSelected() {
    let toggle = !selected;
    setSelected(toggle);
    console.log(toggle);
  }

  return (
    <Card key={props.book.asin} className={selected ? "shadow-lg" : ""}>
      <Card.Img
        variant="top"
        style={{ height: "300px" }}
        className=" object-fit-cover"
        src={props.book.img}
        onClick={toggleSelected}
      />
      <Card.Body>
        <Card.Title style={{ height: "100px" }} className=" overflow-hidden">
          {props.book.title}
        </Card.Title>
        <Card.Text></Card.Text>
        <Button variant="danger" onClick={() => props.callbackFunction(props.book.asin)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardComp;
