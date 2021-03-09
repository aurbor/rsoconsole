import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Title } from "react-admin";

const Dashboard = () => (
  <Grid container>
    <Paper>
      <Card>
        <Title title="Welcome To The RSO Console!" />
        <CardContent>
          This application is an experiment to see if I can build something
          meaningful with React/Node.js - I am hoping to make this something
          that I can use to aid my fantasty football activities on Reality
          Sports Online.
        </CardContent>
      </Card>
    </Paper>
  </Grid>
);
export default Dashboard;
