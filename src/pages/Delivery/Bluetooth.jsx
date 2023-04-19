import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { BsBluetooth } from 'react-icons/bs';
import './recon.css';


export default function BasicCard() {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <a href="/filedisplaybluetooth/" target="_blank">
    <Card
      sx={{
        minWidth: 455,
        width: '300px',
        height: '275px',
        position: 'absolute',
        top: '150px',
        left: '530px',

        '@media (max-width: 1515px)': {
          left: '465px',
          minWidth: 350,
          height: '230px',
        },


        '@media (max-width: 1415px)': {
          left: '445px',
          top: '175px',
          minWidth: 250,
          height: '200px',
          width: '320px',

        },

        '@media (max-width: 1215px)': {
          top: '170px',
          minWidth: 250,
          height: '180px',
          width: '250px',
          left: '40%',

        },

      }}
        className="card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            {hovered ? (
              <>
                <BsBluetooth size={72} />
                <Typography variant="h5" component="div" className='title' sx={{ mt: 1 }}>
                  Bluetooth
                </Typography>
              </>
            ) : (
              <BsBluetooth size={130} />
            )}
          </Box>
        </CardContent>
        {hovered && (
          <CardActions>
            <a href="/filedisplaybluetooth/" target="_blank">
            </a>
          </CardActions>
        )}
      </Card>
    </a>
  );
}