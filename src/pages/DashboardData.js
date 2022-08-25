import React from 'react';
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './DashboardData.css';
import DataTable from './Datatable';

const role= "super-admin"
export default function DashboardData(){
    return(
        <section className="section">
            <div className="container">
                {/* sx={{width:'100%', display:'flex', flexDirection:'row',justifyContent:'space-evenly'}} */}
                <Card sx={{  display: 'flex',width:'100%',height:'20vh',backgroundColor:'#fb9107' }} className='card'>
                    <Box sx={{ width:'100%', display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto', display:'flex' }}>
                            <Box sx={{width:'100%',display:'flex',marginLeft:'2rem'}}>
                                <img src="https://img.icons8.com/ios/50/FFFFFF/signing-a-document.png" alt=''/>
                            </Box>
                            <Box sx={{width:'300px',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center'}}>
                                <Typography sx={{width:'100px',display:'flex',textAlign:'center',fontSize:'40px',color:'white',justifyContent:'center'}}>1</Typography>
                            </Box>
                        </CardContent>
                        <Box sx={{ display: 'flex',justifyContent:'center', alignItems: 'center', padding:'13px',background:'#e7880c',color:'#fff' }}>
                            <Typography sx={{fontSize:'17px'}}>Total Grievances Registered</Typography>
                        </Box>
                    </Box>
                </Card>
                <Card sx={{ display: 'flex',width:'100%',height:'20vh',backgroundColor:'#48a44d' }} className='card'>
                    <Box sx={{ width:'100%', display: 'flex', flexDirection: 'column'}}>
                        <CardContent sx={{ flex: '1 0 auto', display:'flex' }}>
                            <Box sx={{width:'100%',display:'flex',marginLeft:'2rem'}}>
                                <img src="https://img.icons8.com/dotty/80/FFFFFF/documents.png" alt=''/>
                            </Box>
                            <Box sx={{width:'300px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                <Typography sx={{width:'100px',display:'flex',textAlign:'center',fontSize:'40px',color:'white',justifyContent:'center'}}>1</Typography>
                            </Box>
                        </CardContent>
                        <Box sx={{ display: 'flex',justifyContent:'center', alignItems: 'center', padding:'13px',background:'#2b8630',color:'#fff' }}>
                            <Typography sx={{fontSize:'17px'}}>Number Of Grievances Pending</Typography>
                        </Box>
                    </Box>
                </Card>
                <Card sx={{ display: 'flex',width:'100%',height:'20vh',backgroundColor:'#e53c37' }} className='card'>
                    <Box sx={{ width:'100%', display: 'flex', flexDirection: 'column'}}>
                        <CardContent sx={{ flex: '1 0 auto', display:'flex' }}>
                            <Box sx={{width:'100%',display:'flex',marginLeft:'2rem'}}>
                                <img src="https://img.icons8.com/pastel-glyph/64/FFFFFF/checked--v3.png" alt=''/>
                            </Box>
                            <Box sx={{width:'300px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                <Typography sx={{width:'100px',display:'flex',textAlign:'center',fontSize:'40px',color:'white',justifyContent:'center'}}>1</Typography>
                            </Box>
                        </CardContent>
                        <Box sx={{ display: 'flex',justifyContent:'center', alignItems: 'center', padding:'13px',background:'#b52a25',color:'#fff' }}>
                            <Typography sx={{fontSize:'17px'}}>Number Of Grievances Closed</Typography>
                        </Box>
                    </Box>
                </Card>
            </div>
            <div>
                <DataTable/>
            </div>

        </section>
    );
}

// sx={{margin:0,padding:0,height:'10rem',gap:'20px',display:'flex',justifyContent:'center',alignItems:'center'}}