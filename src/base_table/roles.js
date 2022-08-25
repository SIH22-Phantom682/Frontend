import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Roles() {
  const [roles, setRoles] = useState(undefined);
  return (
    <>
      <Grid container spacing={1} justifyContent="space-between" alignItems="center">
        <Grid item>
          <h2>Roles</h2>
        </Grid>
      </Grid>
      <TableContainer component={Paper} style={{ marginTop: 30 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sr. No.</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Permissions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roles &&
              roles.map((row, index) => (
                <TableRow key={row._id} sx={{ "&:last-child td, &:last-child th": { border: 0 }, padding: 8 }}>
                  <TableCell component="th" scope="row">
                    {index + 1}.
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="left">{row.permissions.join(", ")}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}