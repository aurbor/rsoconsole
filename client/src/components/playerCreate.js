import React from "react";
import {
  Create,
  SimpleForm,
  NumberInput,
  TextInput,
  SelectInput,
} from "react-admin";

const playerCreate = (props) => {
  return (
    <Create title="Create Player" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <SelectInput
          source="position"
          choices={[
            { id: "Quarterback", name: "Quarterback" },
            { id: "Running Back", name: "Running Back" },
            { id: "Wide Receiver", name: "Wide Receiver" },
            { id: "Tight End", name: "Tight End" },
            { id: "Defensive Tackle", name: "Defensive Tackle" },
            { id: "Defensive End", name: "Defensive End" },
            { id: "Defensive Back", name: "Defensive Back" },
            { id: "Linebacker", name: "Linebacker" },
            { id: "Kicker", name: "Kicker" },
          ]}
        />
        <SelectInput
          source="nflTeam"
          choices={[
            { id: "Seattle Seahawks", name: "Seattle Seahawks" },
            { id: "Arizona Cardinals", name: "Arizona Cardinals" },
            { id: "Los Angeles Rams", name: "Los Angeles Rams" },
          ]}
        />
        <TextInput source="ufaYear" />

        <NumberInput source="salary" />
      </SimpleForm>
    </Create>
  );
};

export default playerCreate;
