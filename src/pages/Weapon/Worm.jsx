import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AiFillFileWord } from 'react-icons/ai';

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
    <a href="/filedisplayworm/" target="_blank">
      <Card
      sx={{

        minWidth: 455,
        width: '300px',
        height: '275px',
        position: 'absolute',
        top: '465px',
        right: '50px',

        // '@media (max-width: 1508px)': {
        //   minWidth: 350,
        //   right: '80px',
        //   height: '230px',
        //   top: '405px',

        // },

        '@media (max-width: 1508px)': {
          minWidth: 350,
          left: '860px',
          height: '230px',
          top: '405px',
          
        },

        '@media (max-width: 1215px)': {
          left: '765px',
          minWidth: 330,
          height: '210px',

        },

        '@media (max-width: 1115px)': {
          left: '760px',
          minWidth: 310,
          height: '210px',
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
                <AiFillFileWord size={72} />
                <Typography variant="h5" component="div" className='title' sx={{ mt: 1 }}>
                  VBA Macro
                </Typography>
              </>
            ) : (
              <AiFillFileWord size={130} />
            )}
          </Box>
        </CardContent>
        {hovered && (
          <CardActions>
            <a href="/filedisplayworm/" target="_blank">
            </a>
          </CardActions>
        )}
      </Card>
    </a>
  );
}