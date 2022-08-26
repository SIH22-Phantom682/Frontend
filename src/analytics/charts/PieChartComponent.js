import React from "react";
import { PieChart, Pie, Legend } from "recharts";
import Card from "@mui/material/Card";

const data02 = [
  { name: "Termination", value: 1000 },
  { name: "Non-Payment", value: 3000 },
  { name: "Less Wages Payment", value: 1000 },
  { name: "Recruitment", value: 800 },
  { name: "Vigilance Related", value: 400 },
  { name: "Service Matters", value:3000 },
];

export default function PieChartComponent({ title }) {
  return (
    <Card sx={{ padding: 2 }}>
      <h2 style={{ marginLeft: 15, fontSize: 22, marginBottom: 25 }}>{title}</h2>
      <PieChart width={600} height={300}>
        <Legend layout="vertical" verticalAlign="top" align="right" />
        <Pie data={data02} dataKey="value" cx="50%" cy="50%"  outerRadius={120} fill="#8884d8" label />
      </PieChart>
    </Card>
  );
}