import Style from "./SearchResult.module.css";

const searchResults = [
  { jobTitle: "React developer", amount: 500000 },
  { jobTitle: "Python developer", amount: 500000 },
  { jobTitle: "Python developer", amount: 500000 },
];

export default function SearchResult() {
  return (
    <div className={`${Style.salariesWrapper} mt-4`}>
      {searchResults.map((result, indx) => {
        return <Result {...{ salary: result }} key={indx + "salary"} />;
      })}
    </div>
  );
}

const Result = ({ salary }) => {
  const { jobTitle, amount } = salary;
  return (
    <div className={`${Style.salaryBox} rounded border`}>
      <div>
        <b>Server</b>
      </div>
      <div>
        <b className="text-primary">Average Salary {amount} per year</b>
      </div>
      <div>
        <p style={{ textDecoration: "underline" }}>Job openings</p>
      </div>
    </div>
  );
};
