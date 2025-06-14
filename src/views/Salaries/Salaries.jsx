import { CCol, CContainer, CFormLabel, CFormSelect, CRow } from "@coreui/react";
import AutoCompletComponent from "../../reusable/components/AutoCompletComponent";
import Style from "../Home/Home.module.css";

import { useState } from "react";
import SearchResult from "./SearchResult/SearchResult";
const industries = ["Agriculture", "Finance"];

export default function Salaries() {
  const [searchKey, setSearchKey] = useState("");

  return (
    <div className="">
      <div
        className={`${Style?.homeContainer}`}
        style={{ background: "var(--color-footer)" }}
      >
        <CContainer>
          <div
            style={{
              width: "80%",
              margin: "auto",
              position: "sticky",
              top: "10rem",
            }}
          >
            <AutoCompletComponent
              placeholder="Job title"
              {...{ searchKey, setSearchKey }}
            />
          </div>
        </CContainer>

        {/* <CRow className="bg-danger">
          <CCol md="" className="m-auto">
          
          </CCol>
        </CRow> */}
      </div>
      <section className="mt-5">
        <CContainer>
          <div
            style={{
              width: "80%",
              margin: "auto",
              position: "sticky",
              top: "10rem",
            }}
          >
            <h4 style={{ fontWeight: "600" }}>
              {" "}
              Browse Top paying jobs in the industry
            </h4>

            <CRow>
              <CCol md="5">
                <CFormLabel>
                  <b>Choose an industry</b>
                </CFormLabel>
                <CFormSelect>
                  {industries.map((industry) => {
                    return <option key={industry}>{industry}</option>;
                  })}
                </CFormSelect>
              </CCol>
            </CRow>
            <SearchResult />
          </div>
        </CContainer>
      </section>
    </div>
  );
}
