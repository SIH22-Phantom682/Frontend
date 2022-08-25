import React, { useState, useEffect } from "react";
import ConfirmationModal from "../components/ConfirmationalModal/ConfirmationalModal.js";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from '@mui/icons-material/Visibility';
import TablePagination from "@mui/material/TablePagination";
import Moment from 'react-moment';

export default function User() {
  const [grievances, setGrievances] = useState([]);
  const [grievance, setGrievance] = useState(undefined);

  const [selectedGrievanceId, setSelectedGrievanceId] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const fetchAllGrievances = async (e) => {
    const result = await fetch(process.env.REACT_APP_API_URL + "/grievance/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    });
    const data = await result.json();
    console.log(data);
    setGrievances(data.data);
  };

  useEffect(() => {
    fetchAllGrievances();
  }, []);

  return (
    <>
      <Grid
        container
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <h2>User Data</h2>
        </Grid>
      </Grid>
      <TableContainer component={Paper} style={{ marginTop: 30 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sr. No.</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Department</TableCell>
              <TableCell align="left">Status</TableCell>
              {/* <TableCell align="left">createdAt</TableCell>
              <TableCell align="left">DeletedAt</TableCell> */}
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
            grievances &&
            grievances
                .map((row, index) => (
                  row.map((row1,index1) => (
                  <TableRow
                    key={row1._id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      padding: 8,
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {index1 + 1}
                    </TableCell>
                    <TableCell align="left">{row1.description}</TableCell>
                    <TableCell align="left">{row1.description}</TableCell>
                    <TableCell align="left">{row1.status}</TableCell>
                    {/* <TableCell align="left"><Moment format="YYYY/MM/DD">{row1.createdAt}</Moment></TableCell>
                    <TableCell align="left"><Moment format="YYYY/MM/DD">{row1.createdAt}</Moment></TableCell> */}
                    <TableCell align="left">
                      <IconButton
                        onClick={() => {
                          setShowEditModal(true);
                          setGrievance(row1._id);
                          setSelectedGrievanceId(row1._id);
                        }}
                      >
                        <VisibilityIcon fontSize="small"/>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  ))
                ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={`${grievances.length}`}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <Dialog
        open={showAddModal}
        onClose={() => {
          setShowAddModal(false);
          setGrievance("");
        }}
        fullWidth={true}
        maxWidth="xs"
      >
        <DialogTitle style={{ paddingBottom: 0 }}>Add Grievance</DialogTitle>
        <DialogContentText></DialogContentText>
        <DialogContent>
          <TextField
            autoFocus
            label="Grievance"
            type="text"
            value={grievance}
            onChange={(e) => setGrievance(e.target.value)}
            fullWidth
            variant="outlined"
            size="small"
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setShowAddModal(false);
              setGrievance("");
            }}
          >
            Cancel
          </Button>
          <Button>Add</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={showEditModal}
        onClose={() => {
          setShowEditModal(false);
          setGrievance("");
        }}
        fullWidth={true}
        maxWidth="xs"
      >
        <DialogTitle style={{ paddingBottom: 0 }}>Edit Grievance</DialogTitle>
        <DialogContentText></DialogContentText>
        <DialogContent>
          <TextField
            autoFocus
            label="Grievance"
            type="text"
            value={grievance}
            onChange={(e) => setGrievance(e.target.value)}
            fullWidth
            variant="outlined"
            size="small"
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setShowEditModal(false);
              setGrievance("");
            }}
          >
            Cancel
          </Button>
          <Button>Save</Button>
        </DialogActions>
      </Dialog>

      <ConfirmationModal
        open={showDeleteModal}
        message="Are you sure you want to delete this grievance?"
        handleClose={() => setShowDeleteModal(false)}
      />
    </>
  );
}