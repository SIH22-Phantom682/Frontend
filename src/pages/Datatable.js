import * as React from 'react';
import Button from '@mui/material/Button';
import { DataGrid} from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Sn.', width: 70 },
  { field: 'registrationNo', headerName: 'Registration Number', width: 400 },
  { field: 'receiveDate', headerName: 'Received Date', width: 400 },
  { field: 'deadLine', headerName: 'deadLine', width: 400 },
  // {
  //   field: 'status',
  //   headerName: 'Status',
  //   description: 'This column has a value getter and is not sortable.',
  //   width: 320,
  //   valueGetter: (params) =>
  //     `${params.row.status || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  { id: 1, registrationNo: '4352', receiveDate: '12/04/2022', deadLine: 35},
  { id: 2, registrationNo: '5232', receiveDate: '12/04/2022', deadLine: 4 },
  { id: 3, registrationNo: '5323', receiveDate: '12/04/2022', deadLine: 1 },
  { id: 4, registrationNo: '4324', receiveDate: '12/04/2022', deadLine: 1 },
  { id: 5, registrationNo: '8554', receiveDate: '12/04/2022', deadLine: 1 },
  { id: 6, registrationNo: '5345', receiveDate: '12/04/2022', deadLine: 15 },
  { id: 7, registrationNo: '6454', receiveDate: '12/04/2022', deadLine: 4 },
  { id: 8, registrationNo: '7643', receiveDate: '12/04/2022', deadLine: 3 },
  { id: 9, registrationNo: '3435', receiveDate: '12/04/2022', deadLine: 6 },
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