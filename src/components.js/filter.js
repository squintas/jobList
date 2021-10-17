import "./filter.scss";

function Filter({ filter }) {
  return (
    <div className="filter-component">
      <div className="buttons">
        <button
          onClick={() => {
            filter("All");
          }}
        >
          ALL
        </button>
        <button className="frontend">Frontend</button>
        <button>Fullstack</button>
        <button>Clear</button>
      </div>
    </div>
  );
}

export default Filter;
