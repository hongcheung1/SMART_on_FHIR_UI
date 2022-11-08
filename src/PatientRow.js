import React from "react";

const getConditionName = ({ code }) => code && code.text;

const getConditionPath = ({ code }) =>
  code && `https://pubmed.ncbi.nlm.nih.gov/?term=${code.text}`;

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
