import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/common-utils";
import { sortByCreatedAtDate, sortByDeadlineDate } from "../../utils/grievances-utils";
import { getAllGrievances } from "../../api/services/grievances";
import CustomChip from "../../components/common/CustomChip";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import TableSkeleton from "../../components/skeleton/TableSkeleton";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AllGrievances() {
  const [activeTab, setActiveTab] = useState(0);
  const [grievances, setGrievances] = useState(undefined);

  const fetchAllgrievances = async () => {
    const response = await getAllGrievances();
    if (response.status === "success") {
      setGrievances(response.data);
    }
  };

  useEffect(() => {
    fetchAllgrievances();
  }, []);

  return (
    <>
      <Grid container spacing={1} justifyContent="space-between" alignItems="center">
        <Grid item>
          <h2>All Grievances</h2>
        </Grid>
      </Grid>
      <Box sx={{ borderBottom: 1, borderColor: "divider", marginTop: "10px" }}>
        <Tabs value={activeTab} onChange={(e, value) => setActiveTab(value)} aria-label="basic tabs example">
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Pending" {...a11yProps(1)} />
          <Tab label="Review" {...a11yProps(2)} />
        </Tabs>
      </Box>
      {activeTab === 0 && <TabTable data={grievances} />}
      {activeTab === 1 && <TabTable data={grievances.filter((g) => g.status === "pending")} />}
      {activeTab === 2 && <TabTable data={grievances.filter((g) => g.status === "review")} />}
    </>
  );
}

function TabTable({ data }) {
  const [grievances, setGrievances] = useState(data);
  const [createdAtOrder, setCreatedAtOrder] = useState("asc");
  const [deadlineOrder, setDeadlineOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handleCreatedAtSort = () => {
    setGrievances(sortByCreatedAtDate(grievances, createdAtOrder));
    setCreatedAtOrder(createdAtOrder === "asc" ? "desc" : "asc");
  };

  const handleDeadlineSort = () => {
    setGrievances(sortByDeadlineDate(grievances, deadlineOrder));
    setDeadlineOrder(deadlineOrder === "asc" ? "desc" : "asc");
  };

  return (
    <>
      <TableContainer component={Paper} style={{ marginTop: 30 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sr. No.</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Main Category</TableCell>
              <TableCell align="right">Subcategory</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">
                <TableSortLabel active={true} direction={createdAtOrder} onClick={handleCreatedAtSort}>
                  Created At
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel active={true} direction={deadlineOrder} onClick={handleDeadlineSort}>
                  Deadline
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!data ? (
              <TableSkeleton rows={7} columns={10} />
            ) : (
              data.slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10).map((row, index) => (
                <TableRow key={row._id} sx={{ "&:last-child td, &:last-child th": { border: 0 }, padding: 8 }}>
                  <TableCell component="th" scope="row">
                    {index + 1}.
                  </TableCell>
                  <TableCell align="right">{row.title}</TableCell>
                  <TableCell align="right">{row.category?.name}</TableCell>
                  <TableCell align="right">{row.subCategory?.name}</TableCell>
                  <TableCell align="right">
                    <CustomChip status={row?.status} />
                  </TableCell>
                  <TableCell align="right">{formatDate(row.createdAt)}</TableCell>
                  <TableCell align="right">{formatDate(row.deadline)}</TableCell>
                  <TableCell align="right">
                    <Button onClick={() => navigate(`/dashboard/grievances/show/${row._id}`)}>View Details</Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {data?.length / 10 + 1 > 10 && (
        <Container sx={{ display: "grid", placeItems: "center", pt: 4 }}>
          <Pagination count={parseInt(data?.length / 10) + 1} color="primary" onChange={(e, v) => setCurrentPage(v)} />
        </Container>
      )}
    </>
  );
}