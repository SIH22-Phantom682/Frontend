import React from "react";
import BarChartComponent from "./charts/BarChartComponent";
import LineChartComponent from "./charts/LineChartComponent";
import PieChartComponent from "./charts/PieChartComponent";
import GroupBarChartComponent from "./charts/GroupBarChartComponent";
import StackedbarChartComponent from "./charts/StackedBarChartComponent";
import Grid from "@mui/material/Grid";
import Top10 from "./charts/Top10";

const role = "nodal-secretary";

export const ChartData = (
  <>
    {(role === "nodal-secretary" ||
      role === "joint-secreatary" ||
      role === "secretary") && (
      <>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Top10 title="Weekly Grievances" />
          </Grid>
          <Grid item xs={6}>
            <BarChartComponent title="Weekly Grievances" />
          </Grid>
          <Grid item xs={6}>
            <StackedbarChartComponent title="Stack bar Graph" />
          </Grid>
          <Grid item xs={6}>
            <PieChartComponent title="Pie Chart" />
          </Grid>
          <Grid item xs={6}>
            <LineChartComponent title="Line Chart" />
          </Grid>
          <Grid item xs={6}>
            <GroupBarChartComponent title="Bar Chart" />
          </Grid>
        </Grid>
      </>
    )}
    {role === "" && (
      <>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Top10 title="Weekly Grievances" />
          </Grid>
          <Grid item xs={6}>
            <BarChartComponent title="Weekly Grievances" />
          </Grid>
          <Grid item xs={6}>
            <StackedbarChartComponent title="Stack bar Graph" />
          </Grid>
          <Grid item xs={6}>
            <PieChartComponent title="Pie Chart" />
          </Grid>
          <Grid item xs={6}>
            <LineChartComponent title="Line Chart" />
          </Grid>
          <Grid item xs={6}>
            <GroupBarChartComponent title="Bar Chart" />
          </Grid>
        </Grid>
      </>
    )}
    {role === "organization-admin" && (
      <>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <BarChartComponent title="Weekly Grievances" />
          </Grid>
          <Grid item xs={6}>
            <StackedbarChartComponent title="Stack bar Graph" />
          </Grid>
          <Grid item xs={6}>
            <PieChartComponent title="Pie Chart" />
          </Grid>
        </Grid>
      </>
    )}
    {role === "department-admin" && (
      <>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <StackedbarChartComponent title="Stack bar Graph" />
          </Grid>
        </Grid>
      </>
    )}
  </>
);

export default function Analytics() {
  return (
    <div style={{ marginTop: 60 }}>
      {ChartData}
    </div>
  );
}
