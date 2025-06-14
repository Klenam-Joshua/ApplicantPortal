import { CRow } from "@coreui/react";
import CompanySearch from "../../reusable/components/CompanySearch";
import Style from "./CompanyReviews.module.css";
import { Link } from "react-router-dom";
import SearchResult from "./SearchResult/SearchResult";

const industries = [
  { name: "Agriculture", id: 1 },
  { name: "Finance", id: 2 },
  { name: "Health", id: 3 },
  { name: "Aviation", id: 4 },
  { name: "Human Resource", id: 5 },
  { name: "Art and Entertainment", id: 6 },
];

export default function CompanyReviews() {
  return (
    <div className="pt-5">
      <div className="m-auto" style={{ width: "70%" }}>
        <div>
          <h1>Discover exceptional workplaces</h1>
          <p>Get access to thousands of company reviews</p>
        </div>
        <section className="mt-4">
          <p style={{ fontWeight: "600" }} className="my-0">
            Company name or job title
          </p>
          <CompanySearch placeholder="" />
          <p>
            <Link to="/salaries">Do you want to search for salaries?</Link>
          </p>
        </section>
        <section className="mt-5">
          <h5>Browse companies by industry</h5>
          <div className="d-flex gap-2  flex-wrap">
            {industries.map((industry) => {
              return <IndustryItem {...{ industry }} key={industry?.id} />;
            })}
          </div>
        </section>
        <section>
          <SearchResult />
        </section>
      </div>
    </div>
  );
}

const IndustryItem = ({ industry }) => {
  const { name, id } = industry;
  return (
    <div
      className={`border border-1 rounded px-3 py-2 ${Style.industryBox}`}
      style={{ cursor: "pointer" }}
    >
      {name}
    </div>
  );
};
