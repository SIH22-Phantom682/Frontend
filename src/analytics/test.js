{(role === "nodal-secretary" ||
role === "joint-secreatary" ||
role === "secretary") && (
<>
  <Grid container spacing={4}>
    <>
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
  </>
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