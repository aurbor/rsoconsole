import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  ChipField,
  EditButton,
  DeleteButton,
  Filter,
  TextInput,
  SearchInput,
} from "react-admin";
import Avatar from "@material-ui/core/Avatar";
import seahawks from "../img/teams/seahawks.png";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const playerFilter = (props) => {
  <Filter {...props}>
    <SearchInput label="Search" source="name" alwaysOn />
    <TextInput label="Team" source="nflTeam" />
  </Filter>;
};

export const playerList = (props) => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid container>
        <Card title="This is a card!">
          <CardContent>Welcome to the Players Screen!</CardContent>
        </Card>
      </Grid>
      <Grid container>
        <List {...props} filters={<playerFilter />}>
          <Datagrid>
            <TextField label="Player Name" source="name" />
            <TextField label="Position" source="position" />
            <ChipField
              label="NFL Team"
              avatar={<Avatar src={seahawks} />}
              source="nflTeam"
              variant="outlined"
            />
            <NumberField
              label="Avg. Salary"
              source="salary"
              options={{ style: "currency", currency: "USD" }}
            />
            <TextField label="UFA Year" source="ufaYear" />
            <EditButton basePath="/players" />
            <DeleteButton basePath="/players" />
          </Datagrid>
        </List>
      </Grid>
    </Grid>
  );
};

export default playerList;
