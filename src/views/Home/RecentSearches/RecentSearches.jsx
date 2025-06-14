import { CCol, CListGroup, CListGroupItem, CRow } from "@coreui/react";
import { IoClose } from "react-icons/io5";
import { useAuth } from "../../../hooks/useAuth";
import Style from "./RecentSearches.module.css";

const recentSearches = [
  {
    id: "",
    jobId: "",
    jobName: "Python Developer",
    counts: 30923,
  },
  {
    id: "",
    jobId: "",
    jobName: "JavaScript Developer",
    counts: 30923,
  },
  {
    id: "",
    jobId: "",
    jobName: "Hardware Engineer",
    counts: 30923,
  },
  {
    id: "",
    jobId: "",
    jobName: "Pentester",
    counts: 30923,
  },
];

export default function RecentSearches() {
  const { auth } = useAuth();
  console.log(auth);
  return auth?.userName ? <RecentSearch /> : <div>Login</div>;
}

export function RecentSearch() {
  return (
    <div>
      <CRow className="px-0 mx-0">
        <CCol md="7" className="m-auto">
          <CListGroup className={`${Style.recentSearches}`}>
            {recentSearches.map((search, idx) => {
              return <Search {...{ search }} key={idx + "____search"} />;
            })}
          </CListGroup>
        </CCol>
      </CRow>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
const Search = ({ search }) => {
  return (
    <CListGroupItem
      className={`py-2 d-flex justify-content-between ${Style?.searchList}`}
      style={{ borderInline: "none" }}
    >
      <div>
        {/*eslint-disable-next-line react/prop-types */}
        <span>{search.jobName}</span>

        <div>
          <span
            className="text-danger"
            style={{ fontWeight: "300", fontSize: "0.9rem" }}
          >
            {/*eslint-disable-next-line react/prop-types */}
            {search?.counts} new
          </span>
        </div>
      </div>
      <div>
        <span>
          <IoClose size={"1.6rem"} fontWeight={"300"} />
        </span>
      </div>
    </CListGroupItem>
  );
};
