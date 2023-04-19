import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MdOutlinePhishing } from 'react-icons/md';

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
    <a href="/phish/" target="_blank">
      <Card
      sx={{
        minWidth: 455,
        width: '300px',
        height: '275px',
        position: 'absolute',
        top: '150px',
        right: '50px',
        '@media (max-width: 1515px)': {
          minWidth: 350,
          right: '80px',
          height: '230px',

        },

        '@media (max-width: 1415px)': {
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
          right: '9%',

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
                <MdOutlinePhishing  size={72} />
                <Typography variant="h5" component="div" className='title' sx={{ mt: 1 }}>
                  Website Link
                </Typography>
              </>
            ) : (
              <MdOutlinePhishing  size={130} />
            )}
          </Box>
        </CardContent>
        {hovered && (
          <CardActions>
            <a href="/phish/" target="_blank">
            </a>
          </CardActions>
        )}
      </Card>
    </a>
  );
}

