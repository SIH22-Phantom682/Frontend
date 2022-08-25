import { useState, useEffect } from "react";
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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Countries() {
  const [countries, setCountries] = useState(undefined);
  const [country, setCountry] = useState("");
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <Grid container spacing={1} justifyContent="space-between" alignItems="center">
        <Grid item>
          <h2>Countries</h2>
        </Grid>
        <Grid item>
          <Button sx={{background:'#00263b'}} variant="contained" onClick={() => setShowAddModal(true)}>
            + Add Country
          </Button>
        </Grid>
      </Grid>
      <TableContainer component={Paper} style={{ marginTop: 30 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sr. No.</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left" style={{ paddingLeft: 25 }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countries &&
              countries.map((row, index) => (
                <TableRow key={row._id} sx={{ "&:last-child td, &:last-child th": { border: 0 }, padding: 8 }}>
                  <TableCell component="th" scope="row">
                    {index + 1}.
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">
                    <IconButton
                      onClick={() => {
                        setShowEditModal(true);
                        setCountry(row.name);
                        setSelectedCountryId(row._id);
                      }}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        setShowDeleteModal(true);
                        setCountry(row.name);
                        setSelectedCountryId(row._id);
                      }}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={showAddModal}
        onClose={() => {
          setShowAddModal(false);
          setCountry("");
        }}
        fullWidth={true}
        maxWidth="xs">
        <DialogTitle style={{ paddingBottom: 0 }}>Add Country</DialogTitle>
        <DialogContentText></DialogContentText>
        <DialogContent>
          <TextField
            autoFocus
            label="Country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            fullWidth
            variant="outlined"
            size="small"
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setShowAddModal(false);
              setCountry("");
            }}>
            Cancel
          </Button>
          <Button disabled={!country}>
            Add
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={showEditModal}
        onClose={() => {
          setShowEditModal(false);
          setCountry("");
        }}
        fullWidth={true}
        maxWidth="xs">
        <DialogTitle style={{ paddingBottom: 0 }}>Edit Country</DialogTitle>
        <DialogContentText></DialogContentText>
        <DialogContent>
          <TextField
            autoFocus
            label="Country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            fullWidth
            variant="outlined"
            size="small"
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setShowEditModal(false);
              setCountry("");
            }}>
            Cancel
          </Button>
          <Button disabled={!country}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

    </>
  );
}