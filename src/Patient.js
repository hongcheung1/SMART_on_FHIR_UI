import React, { useState } from "react";
import Banner from "./Banner";
import PatientRow from "./PatientRow";

function Patient({ patient, meds }) {
  // added sort functionality
  const [sortDirection, setSortDirection] = useState(true);
  const sortedMeds = sortDirection
    ? meds.sort((a, b) => (a.code.text > b.code.text ? 1 : -1))
    : meds.sort((a, b) => (a.code.text < b.code.text ? 1 : -1));

  return (
    <div className="patient-body">
      <Banner {...patient} />
      <hr />
      <table className="table table-hover">
        <thead>
          <tr>
            <th>
              Condition Name
              <span onClick={() => setSortDirection(!sortDirection)}> ↕</span>
            </th>
            <th>First Recorded</th>
            <th>Search Link</th>
          </tr>
        </thead>
        <tbody>
          {meds.length ? sortedMeds.map((med) => (
            <PatientRow key={med.id} med={med} />
          )) : <div>Empty Records Found!</div>}
        </tbody>
      </table>
    </div>
  );
}

export default Patient;
