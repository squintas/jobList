import Header from "./header";
import Card from "./card";
import "./home.scss";
import Filter from "./filter";
import data from "../data.json";
import { useState } from "react";

function Home() {
  const [jobContent, setJobContent] = useState(data);
  const [isActive, setIsActive] = useState(false);

  function filter(button) {
    let frontendFilterButton = document.getElementsByClassName("frontend");
    let filteredData;

    // Toggle classes function on Filter bar.
    const classUpdate = () => {
      setIsActive(!isActive);
    };

    if (
      button === "Frontend" ||
      button === "Fullstack" ||
      button === "Backend"
    ) {
      filteredData = data.filter((item) => item.role === button);
    } else if (
      button === "Junior" ||
      button === "Senior" ||
      button === "Midweight"
    ) {
      filteredData = data.filter((item) => item.level === button);
    } else if (button === "All") {
      filteredData = data.filter((item) => item.role !== "");
    }
    setJobContent(filteredData);
  }

  return (
    <div className="home-component">
      <Header />
      <Filter filter={filter} />
      <Card jobContent={jobContent} filter={filter} />
    </div>
  );
}

export default Home;
