import React from "react";
import { List, Datagrid, TextField, EditButton } from "react-admin";

const TeamList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField label="Team Name" source="teamName" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default TeamList;
