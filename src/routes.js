import { lazy } from "react";

const Home = lazy(() => import("./views/Home/Home"));
const CompanyReviews = lazy(() =>
  import("./views/CompanyReviews/CompanyReviews")
);

const Salaries = lazy(() => import("./views/Salaries/Salaries"));

const MyJobs = lazy(() => import("./views/MyJobs/MyJobs"));

const Messages = lazy(() => import("./views/Message/Message"));

const Settings = lazy(() => import("./views/Settings/Settings"));

export const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/salaries",
    component: Salaries,
    name: "Salaries",
  },
  {
    path: "/company-reviews",
    component: CompanyReviews,
    name: "Company reviews",
  },
  {
    path: "/myjobs",
    component: MyJobs,
    name: "My jobs",
  },
  {
    path: "/messages",
    component: Messages,
    name: "Messages",
  },
  {
    path: "/settings",
    component: Settings,
    name: "Settings",
  },
];
