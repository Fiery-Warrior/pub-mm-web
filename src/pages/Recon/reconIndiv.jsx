import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IoPerson } from 'react-icons/io5';

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
    <a href="/username" target="_blank">
      <Card
        sx={{
          minWidth: 455,
          width: '300px',
          height: '275px',
          position: 'absolute',
          top: '150px',
          left: '50px',

          '@media (max-width: 1508px)': {
            minWidth: 350,
            left: '80px',
            height: '230px',//'14em' //'33vh'
            
          },

          // '@media (max-width: 1530px)': {
          //   minWidth: 350,
          //   left: '80px',
          //   height: '230px',
          // },

          /**Once it becomes 1215px then it goes to the  @ media (max-width: 1493px)*/
          '@media (max-width: 1215px)': {
            left: '35px',
            minWidth: 330,
            height: '210px',
          },

          '@media (max-width: 1115px)': {
            left: '30px',
            minWidth: 310,
            height: '210px',
          },

          //For mobile devices
          '@media (width <= 500px)': {
            left: '30px',
            minWidth: 1038, 
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
                <IoPerson size={72} />
                <Typography variant="h5" component="div" className='title' sx={{ mt: 1 }}>
                  Username
                </Typography>
              </>
            ) : (
              <IoPerson size={130} />
            )}
          </Box>
        </CardContent>
        {hovered && (
          <CardActions>
            <a href="/username" target="_blank">
            </a>
          </CardActions>
        )}
      </Card>
    </a>
  );
}

