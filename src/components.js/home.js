import Header from "./header";
import Card from "./card";
import "./home.scss";
import Filter from "./filter";
import data from "../data.json";
import { useState } from "react";

function Home() {
  let [jobContent, setJobContent] = useState(data);
  let [buttonsArray, setButtonsArray] = useState([]);
  let filteredData;

  // Filters function
  function filter(button) {
    if (button) {
      filteredData = data.filter(
        (item) => item.role === button || item.level === button
      );
      setButtonsArray = buttonsArray.push(button);
    }

    setJobContent(filteredData);
  }

  // Clear Filters function
  function clearArray() {
    setButtonsArray([]);
    setJobContent(data);
  }

  return (
    <div className="home-component">
      <Header />
      <Filter
        filter={filter}
        buttonsArray={buttonsArray}
        clearArray={clearArray}
      />
      <Card jobContent={jobContent} filter={filter} />
    </div>
  );
}

export default Home;
