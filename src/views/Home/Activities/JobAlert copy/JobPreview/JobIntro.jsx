import {
  CButton,
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
} from "@coreui/react";
import { TiStarFullOutline } from "react-icons/ti";
import { RxAvatar } from "react-icons/rx";
import { IoBookmarkOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import Style from "./JobsPreview.module.css";

export default function JobIntro({ selectedJob, onApply }) {
  return (
    <div className="">
      <CRow>
        <CCol>
          <div className="d-flex aling-items-center  gap-2">
            <span
              style={{ fontWeight: "600" }}
              className="d-flex align-items-center gap-1"
            >
              <span>
                <RxAvatar />
              </span>
              <span>{selectedJob?.companyName}</span>
            </span>
            <span className="d-flex align-items-center">
              <span>5.0</span> <TiStarFullOutline />
            </span>
          </div>
          <div className="mt-2">
            <h4>{selectedJob?.title}</h4>
            <p>{selectedJob?.location}</p>
          </div>
        </CCol>
        <CCol>
          <div className="d-flex justify-content-end  gap-4">
            <div>
              <CDropdown>
                <CDropdownToggle className={`${Style.dropdown} border-0`}>
                  <BsThreeDots size={"1.2rem"} />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem className={`${Style?.dropdownItem}`}>
                    Save
                  </CDropdownItem>
                  <CDropdownItem className={`${Style?.dropdownItem}`}>
                    Remove Alert
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </div>
            <div>
              <IoBookmarkOutline size={"1.2rem"} />
            </div>
            <div>
              <CButton
                style={{ background: "var(--color-accent)" }}
                className="px-4  text-white"
              >
                Quick Apply
              </CButton>
            </div>
          </div>
        </CCol>
      </CRow>
      <CRow>
        <CCol md="12">
          <p style={{ fontSize: "0.9rem" }}>{selectedJob.description}</p>
        </CCol>
      </CRow>
    </div>
  );
}
