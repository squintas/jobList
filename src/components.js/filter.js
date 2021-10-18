import "./filter.scss";

function Filter({ buttonsArray, clearArray }) {
  return (
    <div className="filter-component">
      <div className="buttons">
        {buttonsArray.map((buttons) => {
          return <button>{buttons}</button>;
        })}
        <button
          onClick={() => {
            clearArray();
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default Filter;
