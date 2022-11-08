import React from "react";

// format entry name text from given record
function PatientName({ name = [] }) {
  let entry =
    name.find((nameRecord) => nameRecord.use === "official") || name[0];
  if (!entry) {
    return <h1>No Name</h1>;
  }
  return <h1>{entry.given.join(" ") + " " + entry.family}</h1>;
}

function Banner({ name, gender, birthDate }) {
  return (
    <div>
      <PatientName name={name} />
      <span>
        Gender: <b>{gender}</b>,{" "}
      </span>
      <span>
        DOB: <b>{birthDate}</b>
      </span>
    </div>
  );
}

export default Banner;
