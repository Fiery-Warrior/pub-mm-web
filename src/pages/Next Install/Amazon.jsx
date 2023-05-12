import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { GrServers } from 'react-icons/gr';

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
    <a href="/filedisplayjacking/" target="_blank">
      <Card
      sx={{
        // minWidth: 455,
        // width: '300px',
        // height: '275px',
        // position: 'absolute',
        // top: '465px',
        // left: '50px',
        // '@media (max-width: 1515px)': {
        //   minWidth: 350,
        //   left: '80px',
        //   height: '230px',
        //   top: '405px',

        // },

        // '@media (max-width: 1215px)': {
        //   top: '425px',
        //   minWidth: 250,
        //   height: '200px',
        //   width: '320px',

        // },
        
        // '@media (max-width: 1115px)': {
        //   top: '405px',
        //   minWidth: 250,
        //   height: '180px',
        //   width: '250px',
        //   left: '9%',//'120px',

        // },
        minWidth: 455,
        width: '300px',
        height: '275px',
        position: 'absolute',
        top: '465px',
        left: '50px',
        '@media (max-width: 1508px)': {
          minWidth: 350,
          left: '80px',
          height: '230px',
          top: '405px',

        },

        '@media (max-width: 1493px)': {
          minWidth: 350,
          left: '80px',
          height: '230px',
          top: '405px',

        },

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
        '@media (width <= 414px)': {
          top: '1425px', 
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
                <GrServers   size={72} />
                <Typography variant="h5" component="div" className='title' sx={{ mt: 1 }}>
                  Web Server
                </Typography>
              </>
            ) : (
              <GrServers   size={130} />
            )}
          </Box>
        </CardContent>
        {hovered && (
          <CardActions>
            <a href="/filedisplayjacking/" target="_blank">
            </a>
          </CardActions>
        )}
      </Card>
    </a>
  );
}

