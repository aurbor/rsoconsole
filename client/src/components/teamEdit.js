import React from "react";
import { Edit, SimpleForm, TextInput, FileInput, FileField } from "react-admin";
const teamEdit = (props) => {
  return (
    <Edit title="Edit Teams" {...props}>
      <SimpleForm>
        <TextInput source="teamName" />
        <TextInput source="division" />
        <FileInput source="teamLogo" label="Team Logo" accept="image/*">
          <FileField source="src" title="title" />
        </FileInput>
      </SimpleForm>
    </Edit>
  );
};

export default teamEdit;
