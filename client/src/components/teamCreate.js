import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  ReferenceInput,
  FileInput,
  FileField,
  useNotify,
  useRedirect,
  useRefresh,
} from "react-admin";

const TeamCreate = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();
  const refresh = useRefresh();

  const onSuccess = () => {
    notify("Team Added Successfully");
    redirect("/nflteams");
    refresh();
  };

  return (
    <Create title="Create Team" onSuccess={onSuccess} {...props}>
      <SimpleForm>
        <TextInput source="teamName" />
        <ReferenceInput label="Division" source="divName" reference="divisions">
          <SelectInput optionText="divName" />
        </ReferenceInput>
        <FileInput source="teamLogo" label="Team Logo" accept="image/*">
          <FileField source="src" title="title" />
        </FileInput>
      </SimpleForm>
    </Create>
  );
};

export default TeamCreate;
