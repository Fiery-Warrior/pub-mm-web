import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './recon.css';


export default function ScanningCardW() {
  return (

    <Card sx={{  minWidth: 440, width: '300px', height: '275px', position: 'absolute', top: '150px', right: '50px' }} className="card">
  <CardContent>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    </Typography>
    <Typography variant="h5" component="div" className='title'>
      Wi-Fi Scanning
    </Typography>
    <Typography className ='provide'>
      Provide ≥ 1
    </Typography>
  </CardContent>
  <CardActions>
    <Typography className='desc'>
      Wifi, External-adapter, frequency, MAC
    </Typography>
  </CardActions>
</Card>



  );
}