import {
  CButton,
  CCol,
  CForm,
  CFormControlWrapper,
  CFormLabel,
  CRow,
} from "@coreui/react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <CRow className="mx-0  h-100">
        <CCol md="8"></CCol>
        <CCol
          md="4"
          className="h-100 bg-white d-flex justify-content-center align-items-center"
        >
          <div>
            <CForm>
              <CRow>
                <CCol md="12" sm="12" className="px-3   mt-2">
                  <CFormControlWrapper>
                    <CFormLabel
                      style={{ fontWeight: "400" }}
                      className="mb-0 pb-0"
                    >
                      Username
                    </CFormLabel>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter username or email"
                    />
                  </CFormControlWrapper>
                </CCol>
                <CCol md="12" sm="12" className="px-3  mt-2">
                  <CFormControlWrapper>
                    <CFormLabel
                      style={{ fontWeight: "400" }}
                      className="mb-0 pb-0"
                    >
                      Password
                    </CFormLabel>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="password"
                    />
                  </CFormControlWrapper>
                </CCol>
                <CCol md="12" sm="12" className="px-3  mt-2">
                  <CButton className="form-control bg-primary text-white">
                    Login
                  </CButton>
                </CCol>
              </CRow>
              <CRow className="mt-3">
                <CCol md="12" className="px-3">
                  <p>
                    <span>Already have an account ?</span>{" "}
                    <Link to="/signup" className="px-2">
                      Signup
                    </Link>
                  </p>
                </CCol>
              </CRow>
            </CForm>
          </div>
        </CCol>
      </CRow>
    </div>
  );
}
