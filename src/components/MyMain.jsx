import React, { useState } from "react";
import SubtitleComp from "./SubtitleComp";
import { Col, Container, Row } from "react-bootstrap";
import CardComp from "./CardComp";
import CategoryComp from "./CategoryComp";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import ShowCategoryComp from "./ShowCategoryComp";

const allCategories = {
  fantasy: fantasy,
  history: history,
  horror: horror,
  romance: romance,
  scifi: scifi,
};

function MyMain() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [library, setLibrary] = useState(allCategories);

  const handleCategoryButton = (categoryName) => {
    setSelectedCategory(categoryName);
    console.log(categoryName);
  };

  const handleDeleteCard = (asin) => {
    let updatedLibrary = { ...library };
    updatedLibrary[selectedCategory] = library[selectedCategory].filter((book) => book.asin !== asin);
    setLibrary(updatedLibrary);
    console.log(updatedLibrary);
  };

  return (
    <>
      <SubtitleComp />
      <div className="text-center m-5">
        <CategoryComp callbackFunction={handleCategoryButton} />
      </div>
      <Container>
        <Row className="gy-3 mb-5">
          {library[selectedCategory] ? (
            (console.log(library[selectedCategory]),
            (<ShowCategoryComp callbackFunction={handleDeleteCard} categoryArray={library[selectedCategory]} />))
          ) : (
            <p className="text-center">Nessun libro disponibile per questo genere.</p>
          )}
        </Row>
      </Container>
    </>
  );
}

export default MyMain;
