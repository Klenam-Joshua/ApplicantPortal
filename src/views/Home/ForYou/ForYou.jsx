import { CCol, CRow } from "@coreui/react";
import Jobs from "./Jobs";
import JobsPreview from "./JobPreview/JobsPreview";
import { useState } from "react";

export default function ForYou() {
  const [selectedJob, setSelectedJob] = useState({});

  const getSelectedJob = (job) => {
    setSelectedJob({ ...job });
  };
  const onApply = () => {};
  return (
    <div className="px-5 mt-4">
      <CRow>
        <CCol md="5">
          <Jobs {...{ selectedJob, getSelectedJob }} />
        </CCol>
        <CCol md="7">
          <JobsPreview {...{ selectedJob, onApply }} />
        </CCol>
      </CRow>
    </div>
  );
}
