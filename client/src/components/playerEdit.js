import React from "react";
import {
  Edit,
  SimpleForm,
  NumberInput,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

const playerEdit = (props) => {
  return (
    <Edit title="Edit Player" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <ReferenceInput
          label="Position"
          source="id"
          reference="playerpositions"
        >
          <SelectInput optionText="position" />
        </ReferenceInput>
        <ReferenceInput label="NFL Team" source="id" reference="nflteams">
          <SelectInput optionText="teamName" />
        </ReferenceInput>
        <TextInput source="ufaYear" />
        <NumberInput source="salary" step={500000} />
      </SimpleForm>
    </Edit>
  );
};

export default playerEdit;
