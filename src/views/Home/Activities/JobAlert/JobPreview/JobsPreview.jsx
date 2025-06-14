import JobIntro from "./JobIntro";

export default function JobsPreview({ selectedJob, onApply }) {
  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        boxShadow: "inset 0 0 0 1px #dedede",
      }}
    >
      <div className="p-2 px-4 py-4 rounded mt-3">
        <JobIntro {...{ selectedJob, onApply }} />
        <div>
          {/* <p>{job?.companyName}</p>
          <p style={{ fontWeight: "500" }}>{job.title}</p> */}
        </div>
        <div></div>
      </div>
    </div>
  );
}
