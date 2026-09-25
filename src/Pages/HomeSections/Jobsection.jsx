import { useState } from "react";
import JobCard from "../../components/Jobcards";

const Jobsection = () => {
 
 const [jobs, setJobs] = useState([
    {
        id: 1,
        name: "IST",
        title: "Web developer"
    }
 ]);

 
  return (
    <div>
      <div className="container my-4">

        <div className="text-center">
          <h4>
            Latest{" "}
            <span className="border-bottom border-3 border-primary p-1">
              Jobs
            </span>{" "}
            Vacancies
          </h4>

          <p className="text-muted">
            Find the latest job opportunities
          </p>
        </div>
        <JobCard allJobs={jobs} />

      </div>
    </div>
  );
};

export default Jobsection;