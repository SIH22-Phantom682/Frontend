import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Card from "@mui/material/Card";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const MedicalDeptdata = [
  {
    name: "Page A",
    TotalG: 4000,
    SolvedG: 2400,
    amt: 2400,
  },
];

const LeaveDeptdata = [
  {
    name: "Page A",
    TotalG: 3490,
    SolvedG: 4300,
    amt: 2100,
  },
];

const FinanceDeptdata = [
  {
    name: "Page A",
    TotalG: 1890,
    SolvedG: 4800,
    amt: 2181,
  },
];

const role = "department-admin";
const subrole = "medical";

export default function StackedbarChartComponent({ title }) {
  return (
    <>    
      {
        (role === "super-admin" || subrole === "null") && (
          <Card sx={{ padding: 2 }}>
          <h2 style={{ marginLeft: 15, fontSize: 22, marginBottom: 25 }}>{title}</h2>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
            <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
          </BarChart>
        </Card>
        )
      }
      {
        (subrole === "medical") && (
          <Card sx={{ padding: 2 }}>
          <h2 style={{ marginLeft: 15, fontSize: 22, marginBottom: 25 }}>{title}</h2>
          <BarChart
            width={500}
            height={300}
            data={MedicalDeptdata}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
            <CartesianGrid strokeDasharray="6 6" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="TotalG" stackId="a" fill="#8884d8" />
            <Bar dataKey="SolvedG" stackId="a" fill="#82ca9d" />
          </BarChart>
        </Card>
        )
      }
      {
        (subrole === "finance") && (
          <Card sx={{ padding: 2 }}>
          <h2 style={{ marginLeft: 15, fontSize: 22, marginBottom: 25 }}>{title}</h2>
          <BarChart
            width={500}
            height={300}
            data={FinanceDeptdata}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
            <CartesianGrid strokeDasharray="6 6" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="TotalG" stackId="a" fill="#8884d8" />
            <Bar dataKey="SolvedG" stackId="a" fill="#82ca9d" />
          </BarChart>
        </Card>
        )
      }
      {
        (subrole === "Leave") && (
          <Card sx={{ padding: 2 }}>
          <h2 style={{ marginLeft: 15, fontSize: 22, marginBottom: 25 }}>{title}</h2>
          <BarChart
            width={500}
            height={300}
            data={LeaveDeptdata}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
            <CartesianGrid strokeDasharray="6 6" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="TotalG" stackId="a" fill="#8884d8" />
            <Bar dataKey="SolvedG" stackId="a" fill="#82ca9d" />
          </BarChart>
        </Card>
        )
      }
    </>
  );
}