import React from "react";
import { PieChart, Pie, Legend } from "recharts";
import Card from "@mui/material/Card";

const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
];

export default function PieChartComponent({ title }) {
  return (
    <Card sx={{ padding: 2 }}>
      <h2 style={{ marginLeft: 15, fontSize: 22, marginBottom: 25 }}>{title}</h2>
      <PieChart width={460} height={300}>
        <Legend layout="vertical" verticalAlign="top" align="right" />
        <Pie data={data02} dataKey="value" cx="50%" cy="50%"  outerRadius={120} fill="#8884d8" label />
      </PieChart>
    </Card>
  );
}