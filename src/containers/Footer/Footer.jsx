import { Link } from "react-router-dom";

const links = [
  { name: "Hiring Lab", path: "/companies" },
  { name: "Browse jobs", path: "/jobs" },
  { name: "Browse companies", path: "companies" },
  { name: "Salaries", path: "/salaries" },
];
export default function Footer() {
  return (
    <div className="py-4  w-100">
      <div className="d-flex flex-wrap gap-3">
        {links.map((link, indx) => {
          const { name, path } = link;
          return (
            <Link
              className="text-sm"
              style={{ textDecoration: "none", fontSize: "0.9rem" }}
              key={indx + "____footer_link"}
              to={path}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
