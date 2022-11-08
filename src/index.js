import React from "react";
import { render } from "react-dom";
import { oauth2 as SMART } from "fhirclient";
import Patient from "./Patient";

const rootElement = document.getElementById("container");

SMART.init({
  // configs are from the example codebase
  iss: "https://launch.smarthealthit.org/v/r3/sim/eyJoIjoiMSIsImIiOiJzbWFydC0xNjQyMDY4IiwiZSI6InNtYXJ0LVByYWN0aXRpb25lci03MTYxNDUwMiJ9/fhir",
  redirectUri: "test.html",
  clientId: "test",
  scope: "launch/patient offline_access openid fhirUser",
  // completeInTarget=true is needed to make this work in the codesandbox frame
  completeInTarget: true,
})
  .then((client) => {
    // Fetch Condition and Patient in parallel to load the app faster
    return Promise.all([
      client.patient.read(),
      client.request(`/Condition?patient=${client.patient.id}`, {
        resolveReferences: "conditionReference",
        pageLimit: 0,
        flat: true,
      }),
    ]);
  })
  .then(
    ([patient, meds]) => {
      render(<Patient patient={patient} meds={meds} />, rootElement);
    },
    (error) => {
      console.error(error);
      render(
        <div>
          <br />
          <pre>{error.stack}</pre>
        </div>,
        rootElement
      );
    }
  );
