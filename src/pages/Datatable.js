import * as React from 'react';
import Button from '@mui/material/Button';
import { DataGrid} from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Sn.', width: 70 },
  { field: 'firstName', headerName: 'Registration Number', width: 200 },
  { field: 'lastName', headerName: 'Received Date', width: 130 },
  { field: 'age', headerName: 'Grievance Description', width: 400 },
  {
    field: 'fullName',
    headerName: 'Status',
    description: 'This column has a value getter and is not sortable.',
    width: 320,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'status',
    headerName: 'Status',
    description: 'This column has a value getter and is not sortable.',
    width: 140,
    sortable: false,
    renderCell: (params) => {
      return <Button sx={{background:'#e1e1e1'}}>Rate Me</Button>;
    },
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, status:'Rate Me'},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, status:'Rate Me' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, status:'Rate Me' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, status:'Rate Me' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 17, status:'Rate Me' },
  { id: 6, lastName: 'Melisandre', firstName: 'Jack', age: 150, status:'Rate Me' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, status:'Rate Me' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, status:'Rate Me' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, status:'Rate Me' },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%',marginTop:'2rem',borderRadius:'100px' }}>
      <div style={{ height: '5vh', width: '100%', background:'#e2e2e2', borderTopLeftRadius:'5px', borderTopRightRadius:'5px',display:'flex',justifyContent:'flex-start',alignItems:'center'}}><h5 style={{marginLeft:'1.5rem'}}>List of Grievance</h5></div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        sx={{padding:'20px'}}
      />
    </div>
  );
}