import { useState } from "react";
// import Style from "./SearchResult.module.css";
import ForYou from "./ForYou/ForYou";
import RecentSearches from "./RecentSearches/RecentSearches";
import Activities from "./Activities/Activities";

const activityOptions = ["Jobs for you", "Recent Searches", "Your Activities"];

export default function SearchResult() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      {/* <CRow>
        <CCol md="6" className="">
          Results and counting
        </CCol>
      </CRow> */}
      <div className="d-flex justify-content-center">
        <div className="d-flex  align-items-center gap-3  mt-3">
          {activityOptions?.map((item, indx) => {
            return (
              <span
                onClick={() => setActiveTab(indx)}
                className={`${activeTab === indx ? "active-tab" : ""}`}
                style={{ fontWeight: 500, cursor: "pointer" }}
                key={indx + "___activity"}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>

      {activeTab === 0 && <ForYou />}
      {activeTab === 1 && <RecentSearches />}
      {activeTab === 2 && <Activities />}
    </div>
  );
}
