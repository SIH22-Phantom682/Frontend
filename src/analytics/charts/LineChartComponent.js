import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Card from "@mui/material/Card";

const data = [
  {
    name: " PieChartComponent",
    totalGrievance: 4000,
    solvedCrievance: 2400,
    amt: 2400,
  },
  {
    name: "Non-Payment",
    totalGrievance: 3000,
    solvedCrievance: 1398,
    amt: 2210,
  },
  {
    name: "Less Wages Payment",
    totalGrievance: 2000,
    solvedCrievance: 9800,
    amt: 2290,
  },
  {
    name: "Recruitment",
    totalGrievance: 2780,
    solvedCrievance: 3908,
    amt: 2000,
  },
  {
    name: "Vigilance Related",
    totalGrievance: 1890,
    solvedCrievance: 4800,
    amt: 2181,
  },
  {
    name: "Service Matters",
    totalGrievance: 2390,
    solvedCrievance: 3800,
    amt: 2500,
  },
];

export default function LineChartComponent({ title }) {
  return (
    <Card sx={{ padding: 2 }}>
      <h2 style={{ marginLeft: 15, fontSize: 22, marginBottom: 25 }}>{title}</h2>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={3} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={3} />
      </LineChart>
    </Card>
  );
}