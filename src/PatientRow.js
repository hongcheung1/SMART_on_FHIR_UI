import React from "react";

// get condition information in the correct format
const getConditionName = ({ code }) => code && code.text;
const getConditionPath = ({ code }) =>
  code && `https://pubmed.ncbi.nlm.nih.gov/?term=${code.text}`; // static link from the customer requirements

function PatientRow({ med }) {
  const name = getConditionName(med);
  const path = getConditionPath(med);

  return (
    <tr>
      <td>{name}</td>
      <td>{med.recordedDate || "-"}</td>
      <td>
        <a href={path}>
          {name.length > 10 ? name.substring(0, 10) + "..." : name}
        </a>
      </td>
    </tr>
  );
}

export default PatientRow;
