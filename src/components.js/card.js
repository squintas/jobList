import "./card.scss";

function Card({ jobContent, filter }) {
  return (
    <div>
      {jobContent.map((company) => {
        return (
          <div key={company.id} className="card-component">
            <div className="company-container">
              <div>
                <img
                  className="company-logo"
                  src={company.logo}
                  alt="Company Logo"
                />
              </div>
              <div>
                <div className="company-details">
                  <h3>{company.company}</h3>
                  <h4>{company.new ? "New!" : null}</h4>
                  <h4>{company.featured ? "Featured" : null}</h4>
                </div>
                <h2 className="job-name">{company.position}</h2>
                <div className="job-info">
                  <h3>{company.postedAt}</h3>
                  <h4>{company.contract}</h4>
                  <h4>{company.location}</h4>
                </div>
              </div>
            </div>

            <div className="job-stack">
              <ul>
                {/* <li onClick={() => filter(company.role)}>{company.role}</li> */}
                <li onClick={() => filter(company.role)}>{company.role}</li>
                <li onClick={() => filter(company.level)}>{company.level}</li>

                {company.languages.map((language) => {
                  return <li>{language}</li>;
                })}

                <li className={company.tools.length < 1 ? "remove" : ""}>
                  {company.tools}
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
