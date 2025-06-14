import { CButton, CCol, CRow } from "@coreui/react";
import Style from "./AutomComplete.module.css";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

export default function AutoCompletComponent({
  placeholder = "Job title, keyword or Company",
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

  const handleOnRowClick = (row) => {
    //HANDLE SEARCH HERE TO RETRIEVE DATA
    console.log(row);
    setActive(false);
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
          handleOnRowClick(searchResults[counter]);

          break;
        default:
          console.log("default entered");
      }
    }
  };

  return (
    <div className={`${Style.auto_container}`}>
      <div>
        <CRow className="px-1 pr-2">
          <CCol className="" md="6">
            <CRow
              className={`align-items-center bg-white ${Style.search_text_field_wrapper}`}
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
                  placeholder={placeholder}
                  type="text"
                  className="form-control border-0  shadow-none  shadow-0"
                />
              </CCol>
              {active && searchResults.length > 0 && (
                <SuggestionComponent
                  {...{ counter, searchResults, onClick: handleOnRowClick }}
                />
              )}
            </CRow>
          </CCol>
          <CCol className="" md="4">
            <select className="form-control  shadow-none  shadow-0">
              <option>Select Location</option>
            </select>
          </CCol>

          <CCol className="r" sm="10" md="2">
            <CButton className={`${Style.sbtn}`}>Search</CButton>
          </CCol>
        </CRow>
      </div>
    </div>
  );
}

const SuggestionComponent = ({ counter, searchResults, onClick }) => {
  return (
    <div className={`${Style.sugggestionContainer}  px-0`}>
      {searchResults?.map((result, indx) => {
        const { name } = result;
        return (
          <li
            onClick={() => onClick(result)}
            className="my-1 py-2"
            key={"___suggestion_list" + indx + 2}
            style={
              counter === indx
                ? {
                    background: "var(--color-accent)",
                    color: "white",
                  }
                : {}
            }
          >
            {name}
          </li>
        );
      })}
    </div>
  );
};
