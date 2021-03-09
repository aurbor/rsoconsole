import React from "react";
import { Admin, Resource } from "react-admin";
import DataProvider from "ra-data-simple-rest";

import PlayerList from "./components/playerList";
import PlayerCreate from "./components/playerCreate";
import PlayerEdit from "./components/playerEdit";

import TeamList from "./components/teamList";
import TeamEdit from "./components/teamEdit";

function App() {
  return (
    <Admin dataProvider={DataProvider("http://localhost:3000")}>
      <Resource
        name="nflteams"
        options={{ label: "NFL Teams" }}
        list={TeamList}
        edit={TeamEdit}
      />
      <Resource name="playerpositions" />
      <Resource
        name="players"
        list={PlayerList}
        create={PlayerCreate}
        edit={PlayerEdit}
      />
    </Admin>
  );
}

export default App;
