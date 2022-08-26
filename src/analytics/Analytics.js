import React from "react";
import BarChartComponent from "./charts/BarChartComponent";
import LineChartComponent from "./charts/LineChartComponent";
import PieChartComponent from "./charts/PieChartComponent";
import GroupBarChartComponent from "./charts/GroupBarChartComponent";
import StackedbarChartComponent from "./charts/StackedBarChartComponent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";


const role = "nodal-secretary";

const Print = () =>{     
  //console.log('print');  
  let printContents = document.getElementById('printablediv').innerHTML;
  let originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
 document.body.innerHTML = originalContents; 
}

const Print1 = () =>{     
  //console.log('print');  
  let printContents = document.getElementById('printablediv1').innerHTML;
  let originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
 document.body.innerHTML = originalContents; 
}

const Print2 = () =>{     
  //console.log('print');  
  let printContents = document.getElementById('printablediv2').innerHTML;
  let originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
 document.body.innerHTML = originalContents; 
}


const Print3 = () =>{     
  //console.log('print');  
  let printContents = document.getElementById('printablediv3').innerHTML;
  let originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
 document.body.innerHTML = originalContents; 
}

const Print4 = () =>{     
  //console.log('print');  
  let printContents = document.getElementById('printablediv4').innerHTML;
  let originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
 document.body.innerHTML = originalContents; 
}

export const ChartData = (
  <>
    {(role === "nodal-secretary" ||
      role === "joint-secreatary" ||
      role === "secretary") && (
      <>
        <Grid container spacing={4}>
          <Grid item xs={6}>
             <Button variant="contained" sx={{background:"#00263b"}} onClick={Print}>Print</Button> 
              <div id='printablediv'>
                <BarChartComponent title="Weekly Grievances" />
              </div>
          </Grid>
          <Grid item xs={6}>
             <Button variant="contained" sx={{background:"#00263b"}} onClick={Print1} >Print</Button>
            <div id='printablediv1'><StackedbarChartComponent title="Stack bar Graph" /></div>
          </Grid>
          <Grid item xs={6}>
             <Button variant="contained" sx={{background:"#00263b"}} onClick={Print2}>Print</Button>
            <div  id='printablediv2'><PieChartComponent title="Pie Chart" /></div>
          </Grid>
          <Grid item xs={6}>
             <Button variant="contained" sx={{background:"#00263b"}} onClick={Print3}>Print</Button>
            <div  id='printablediv3'><LineChartComponent title="Line Chart" /></div>
          </Grid>
          <Grid item xs={6}>
             <Button variant="contained" sx={{background:"#00263b"}} onClick={Print4} >Print</Button>
            <GroupBarChartComponent title="Bar Chart" id='printablediv4' />
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
  return <div style={{ marginTop: 60 }}>{ChartData}</div>;
}
