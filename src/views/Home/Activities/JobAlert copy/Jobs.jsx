/**  Hooks  */

import { useEffect } from "react";
import { useFetch } from "../../../../hooks/useFetch";
import { useFetchAll } from "../../../../hooks/useFetchAll";

/** Endpoints * */
import {
  GetAllRecommendedJobs,
  GetAllUnAuthRecommendedJobs,
} from "../../../../reusable/API/JobsEndpoints";

/** Components  * */
import JobsLoader from "../../../../reusable/components/Loaders/JobsLoader";

/**    Styles ** */
import Style from "../../Home.module.css";

/**  Icons **  */

import { IoBookmarkOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { TiStarFullOutline } from "react-icons/ti";

const jobs = [
  {
    companyName: "RTA Apps",
    title: "React Developer",
    location: "Bangladesh",
    description:
      "I can succeed as a Senior Front End Developer at Capital GroupAs Senior Front End Developer with the Digital Team in the Marketing Sales and Digital (MSD) Organization, you will be at the forefront of crafting innovative solutions, creating state-of-the-art features, and implementing robust, high-performing systems using AWS cloud technology. This critical position involves not only envisioning, developing, and deploying solutions that offer extraordinary user experiences and transformative capabilities but also spearheading engineering endeavors to set the bar for a high performing engineering team. Your expertise will be essential in fostering collaboration across development, infrastructure, and product discussions from start to finish, ensuring our solutions are both impactful and transformative. In your role, you will leverage your extensive experience and deep expertise to guide the team through the complete SDLC process, encompassing analysis, design, development, testing, deployment, and support for a suite of impactful",
  },
  {
    companyName: "RTA Persol",
    title: "Angular Developer",
    location: "Canada",
  },
  {
    companyName: "Amalitech Apps",
    title: "Python Developer",
    location: "India",
  },
  {
    companyName: "RTT Apps",
    title: "React Developer",
    location: "Parkistan",
  },
  {
    title: "JavaScript Developer",
    location: "Ghana",
  },
];

/**
 *  Get recommended jobs for the user if he/she is loggedin
 *  Otherwise get recommended jobs based on the previouse searches
 *  which are stored in the user's localStorage
 */

export default function Jobs({ selectedJob, getSelectedJob }) {
  const { refetch, data, isLoading } = useFetch(GetAllRecommendedJobs(), {}, [
    "jobs",
  ]);

  const handleOnJobSelect = (job) => {
    console.log(job, "selected job");
    getSelectedJob(job);
  };

  // will be enabled if the user is not authenticated
  // const {} = useFetchAll(GetAllUnAuthRecommendedJobs());

  // return isLoading ? (
  //   <JobsLoader />
  // ) : (
  //   <div  onClick={handleOnJobSelect}>
  //     {jobs.map((job, idx) => {
  //       return <JobBox key={idx + "___job"} job={job} />;
  //     })}
  //   </div>
  // );

  useEffect(() => {
    getSelectedJob(jobs[0]);
  }, []);

  return (
    <div>
      {jobs.map((job, idx) => {
        return (
          <JobBox onClick={handleOnJobSelect} key={idx + "___job"} job={job} />
        );
      })}
    </div>
  );
}

const JobBox = ({ job, onClick }) => {
  return (
    <div
      onClick={() => onClick(job)}
      className={` p-2 px-4 py-4 rounded mt-3 ${Style.jobBox}`}
      style={{
        boxShadow: "inset 0 0 0 1px #dedede",
      }}
    >
      <div>
        {/* eslint-disable-next-line react/prop-types*/}
        <p
          className={` py-0 my-0  d-flex justify-content-between ${Style.jobCompany}`}
        >
          <span className="d-flex align-items-center gap-2">
            <RxAvatar />
            <span>{job?.companyName}</span>
            <span className="d-flex align-items-center">
              <span>5.0</span> <TiStarFullOutline />
            </span>
          </span>
          <span>
            <IoBookmarkOutline size={"1.2rem"} />
          </span>
        </p>
        {/* eslint-disable-next-line react/prop-types*/}
        <p
          className={`  py-0 my-1 ${Style.jobTitle}`}
          style={{ fontWeight: "600" }}
        >
          <span>{job.title}</span>
        </p>
        <p className="d-flex my-0 py-0 justify-content-between  align-items-center">
          <span>
            <small>Mumbai, India </small>
          </span>
        </p>
        <p className="text-small py-0 d-flex justify-content-between my-0  w-100 align-items-center">
          <span>$117K - $187K[Employer est]</span>
          <span>24h</span>
        </p>
      </div>
      {/* <div></div> */}
    </div>
  );
};
