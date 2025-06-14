import { CContainer } from "@coreui/react";
import AutoCompletComponent from "../../reusable/components/AutoCompletComponent";
import Style from "./Home.module.css";
import SearchResult from "./SearchResult";
import { useState } from "react";

export default function Home() {
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
              width: "70%",
              margin: "auto",
              position: "sticky",
              top: "10rem",
            }}
          >
            <AutoCompletComponent {...{ searchKey, setSearchKey }} />
          </div>
        </CContainer>

        {/* <CRow className="bg-danger">
          <CCol md="" className="m-auto">
          
          </CCol>
        </CRow> */}
      </div>
      <SearchResult />
    </div>
  );
}
