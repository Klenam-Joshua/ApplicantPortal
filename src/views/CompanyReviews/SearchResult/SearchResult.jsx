import { CCol, CRow } from "@coreui/react";
import googleLog from "../../../assets/images/amazonlogo.jpeg";
import amazonLogo from "../../../assets/images/google__logo.jpeg";
import defaultLogo from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const results = [
  {
    name: "AT company limited",
    reviewCounts: 4,
    industry: "Agriculture",
    imageSrc: defaultLogo,
    description: "Our mission is to be Earth's most customer-centric company.",
  },
  {
    name: "Google Inc",
    reviewCounts: 4423,
    industry: "Technology",
    imageSrc: googleLog,
    description:
      "Our mission is to organize the world’s information and make it universally accessible and useful..",
  },
  {
    name: "Google Inc",
    reviewCounts: 4423,
    industry: "Technology",
    imageSrc: googleLog,
    description:
      "Our mission is to organize the world’s information and make it universally accessible and useful..",
  },
  // name, reviewCounts, industry, imageSrc
];

export default function SearchResult({ keyWord = "software engineer" }) {
  return (
    <div style={{ marginTop: "3rem" }}>
      <h6>Search results for{keyWord}</h6>
      <section>
        {results.map((result, indx) => {
          return (
            <SearchItem
              {...{ company: result }}
              key={indx + "___company____-search"}
            />
          );
        })}
      </section>
    </div>
  );
}

const SearchItem = ({ company }) => {
  const { name, reviewCounts, industry, imageSrc, description } = company;
  return (
    <CRow className="d-flex justify-content-between  my-3 py-3 border-bottom">
      <CCol>
        <CRow>
          <CCol md="2">
            <img
              src={imageSrc}
              alt="company_image"
              style={{ width: "3rem", height: "3rem", border: "5px" }}
            />
          </CCol>

          <CCol md="10">
            <h6>
              <b>{name}</b>
            </h6>
            <p style={{ fontSize: "0.8rem" }} className="my-0">
              <b>5.0 </b>
              {reviewCounts} reviews
            </p>
            <p style={{ fontSize: "0.8rem" }} className="my-0">
              {industry}
            </p>
          </CCol>
        </CRow>
      </CCol>
      <CCol md="4">
        <p style={{ fontSize: "0.8rem" }}>{description || ""}</p>
      </CCol>
      <CCol md="4">
        <CRow>
          <CCol md="4">
            <Link to="company/1" style={{ fontSize: "0.9rem" }}>
              Reviews
            </Link>
          </CCol>
          <CCol md="4">
            <Link to="" style={{ fontSize: "0.9rem" }}>
              Salaries
            </Link>
          </CCol>
          <CCol md="4">
            <Link to="" style={{ fontSize: "0.9rem" }}>
              Jobs{" "}
            </Link>
          </CCol>
        </CRow>
      </CCol>
    </CRow>
  );
};
