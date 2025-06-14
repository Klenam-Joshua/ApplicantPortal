import { menus } from "../reusable/data/menus";

import {
  CCol,
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CNavItem,
  CRow,
} from "@coreui/react";

import { Link, NavLink } from "react-router-dom";
// import { useState } from "react";

export default function Header() {
  //   const [visible, setVisible] = useState(false);
  return (
    <div>
      <CHeader className="py-0">
        <CContainer fluid className="py-0">
          <div className="d-flex gap-4 align-items-center">
            <CHeaderBrand>Header</CHeaderBrand>

            <CHeaderNav className="h-100  py-3">
              {menus.map((menu, indx) => {
                const { name, path } = menu;
                return (
                  <CNavItem className="mx-3" key={indx + "____men_item"}>
                    <NavLink
                      style={{ fontWeight: "500" }}
                      className={({ isActive }) => {
                        return isActive
                          ? "text-decoration-none  active-link  jkl-link"
                          : "text-decoration-none  jkl-link";
                      }}
                      href="/salaries"
                      to={path}
                    >
                      {name}
                    </NavLink>
                  </CNavItem>
                );
              })}
            </CHeaderNav>
          </div>
          <div>
            <CRow>
              <CCol>
                <Link
                  style={{ wordBreak: "normal", textWrap: "nowrap" }}
                  className="text-decoration-none  text-primary "
                  to={"/signin"}
                >
                  Sign in
                </Link>
              </CCol>
              <CCol>|</CCol>
              <CCol style={{ wordBreak: "normal", textWrap: "nowrap" }}>
                <Link
                  className="text-decoration-none  text-dark"
                  to={"/signin"}
                >
                  Employers / Post job
                </Link>
              </CCol>
            </CRow>
          </div>
        </CContainer>
      </CHeader>
    </div>
  );
}
