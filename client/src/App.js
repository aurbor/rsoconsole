import React from "react";
import { Admin, Resource } from "react-admin";
import DataProvider from "ra-data-simple-rest";
import Dashboard from "./Dashboard";

import PlayerList from "./components/playerList";
import PlayerCreate from "./components/playerCreate";
import PlayerEdit from "./components/playerEdit";

import TeamList from "./components/teamList";
import TeamEdit from "./components/teamEdit";
import TeamCreate from "./components/teamCreate";

import SportsFootballIcon from "@material-ui/icons/SportsFootball";
import PersonIcon from "@material-ui/icons/Person";

function App() {
  return (
    <Admin
      dashboard={Dashboard}
      dataProvider={DataProvider("http://localhost:3000")}
    >
      <Resource name="playerpositions" />
      <Resource name="divisions" />
      <Resource
        name="nflteams"
        icon={SportsFootballIcon}
        options={{ label: "NFL Teams" }}
        list={TeamList}
        create={TeamCreate}
        edit={TeamEdit}
      />
      <Resource
        name="players"
        icon={PersonIcon}
        list={PlayerList}
        create={PlayerCreate}
        edit={PlayerEdit}
      />
    </Admin>
  );
}

export default App;
