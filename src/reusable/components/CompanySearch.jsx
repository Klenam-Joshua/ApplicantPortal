import { CButton, CCol, CFormSelect, CRow } from "@coreui/react";
import Style from "./AutomComplete.module.css";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

export default function CompanySearch({
  // eslint-disable-next-line react/prop-types
  placeholder = "Search company",
  // eslint-disable-next-line react/prop-types
  searchKey,
  // eslint-disable-next-line react/prop-types
  setSearchKey,
  // eslint-disable-next-line react/prop-types
  onSearchSucces,
}) {
  const [counter, setCounter] = useState(0);
  const [active, setActive] = useState(false);

  const [searchResults, setSearchResults] = useState([
    { name: "Joshua", age: "21" },
    { name: "Sedinam", age: "10" },
    { name: "David", age: "14" },
  ]);
  // const [searchKey, setSearchKey] = useState("");

  useDebounce(searchKey, 400, (result) => {
    // alert("fired");
    setActive(true);
    //implement a function to handle search
  });
  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (searchResults.length > 0) {
      switch (e.key) {
        case "ArrowUp":
          setCounter((prev) =>
            prev === 0 ? searchResults.length - 1 : prev - 1
          );
          break;
        case "ArrowDown":
          setCounter((prev) =>
            prev === searchResults.length - 1 ? 0 : prev + 1
          );
          break;
        case "Enter":
          console.log(searchResults[counter], "current state");
          setActive(false);
          break;
        default:
          console.log("default entered");
      }
    }
  };

  return (
    <div className={`${Style.auto_container}  mt-0 pt-0`}>
      <div>
        <CRow className="px-1 pr-2 mt-0">
          <CCol className="" md="5">
            <CRow
              style={{
                border: "1px solid var(--color-primary)",
              }}
              className={`align-items-center bg-white py-1 ${Style.search_text_field_wrapper} ${Style.company_search}`}
            >
              <CCol md="1">
                <span>
                  <IoMdSearch size="1.4rem" />
                </span>
              </CCol>
              <CCol md="11">
                <input
                  onKeyDown={handleKeyDown}
                  autoFocus
                  onChange={handleChange}
                  placeholder={`${placeholder}`}
                  type="text"
                  className="form-control border-0  shadow-none  shadow-0"
                />
              </CCol>
              {active && searchResults.length > 0 && (
                <SuggestionComponent {...{ counter, searchResults }} />
              )}
            </CRow>
          </CCol>
          <CCol className="" md="4">
            <select
              className="form-control  shadow-none   shadow-0"
              style={{
                paddingBlock: "0.6rem",
                border: "1px solid var(--color-footer)",
              }}
            >
              <option>Select Location</option>
            </select>
          </CCol>

          <CCol className="r" sm="10" md="3">
            <CButton
              className={`${Style.sbtn} w-100 `}
              style={{ fontWeight: "bolder", paddingBlock: "0.6rem" }}
            >
              Search Company
            </CButton>
          </CCol>
        </CRow>
      </div>
    </div>
  );
}

const SuggestionComponent = ({ counter, searchResults }) => {
  return (
    <div className={`${Style.sugggestionContainer}`}>
      {searchResults?.map((result, indx) => {
        const { name } = result;
        return (
          <li
            className="my-1 py-2"
            key={"___suggestion_list" + indx + 2}
            style={{ background: counter === indx ? "red" : "" }}
          >
            {name}
          </li>
        );
      })}
    </div>
  );
};
