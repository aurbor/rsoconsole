import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ReferenceField,
} from "react-admin";
import Grid from "@material-ui/core/Grid";

const TeamList = (props) => {
  return (
    <Grid
      container
      spacing={5}
      direction="row"
      justify="center"
      alignItems="center'"
    >
      <Grid item xs={10}>
        <List {...props}>
          <Datagrid>
            <TextField label="Team Name" source="teamName" />
            <ReferenceField
              label="Division"
              source="divName"
              reference="divisions"
            >
              <TextField source="divName" />
            </ReferenceField>

            <EditButton />
          </Datagrid>
        </List>
      </Grid>
    </Grid>
  );
};

export default TeamList;
