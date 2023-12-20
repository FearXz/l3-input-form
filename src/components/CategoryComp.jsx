import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

function CategoryComp({ callbackFunction }) {
  return (
    <ButtonGroup>
      <Button key={"btn1"} variant={"primary"} onClick={() => callbackFunction("fantasy")}>
        Fantasy
      </Button>
      <Button key={"btn2"} variant={"primary"} onClick={() => callbackFunction("history")}>
        History
      </Button>
      <Button key={"btn3"} variant={"primary"} onClick={() => callbackFunction("horror")}>
        Horror
      </Button>
      <Button key={"btn4"} variant={"primary"} onClick={() => callbackFunction("romance")}>
        Romance
      </Button>
      <Button key={"btn5"} variant={"primary"} onClick={() => callbackFunction("scifi")}>
        Sci-Fi
      </Button>
    </ButtonGroup>
  );
}

export default CategoryComp;
