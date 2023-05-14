import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { BsVirus2  } from 'react-icons/bs';
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
    <a href="/filedisplayvirus/" target="_blank">
      <Card
      sx={{
        // minWidth: 455,
        // width: '300px',
        // height: '275px',
        // position: 'absolute',
        // top: '150px',
        // right: '50px',
        // '@media (max-width: 1515px)': {
        //   minWidth: 350,
        //   right: '80px',
        //   height: '230px',

        // },

        // '@media (max-width: 1215px)': {
        //   top: '175px',
        //   minWidth: 250,
        //   height: '200px',
        //   width: '320px',

        // },

        // '@media (max-width: 1115px)': {
        //   top: '170px',
        //   minWidth: 250,
        //   height: '180px',
        //   width: '250px',
        //   right: '9%',

        // },
        minWidth: 455,
        width: '300px',
        height: '275px',
        position: 'absolute',
        top: '150px',
        right: '50px',

        '@media (max-width: 1508px)': {
          minWidth: 350,
          right: '80px',
          height: '230px',
        },

        '@media (max-width: 1508px)': {
          minWidth: 350,
          left: '860px',
          height: '230px',

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

        //For mobile devices
        '@media (width <= 500px)': {
          top: '915px', 
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
                <BsVirus2  size={72} />
                <Typography variant="h5" component="div" className='title' sx={{ mt: 1 }}>
                  Virus
                </Typography>
              </>
            ) : (
              <BsVirus2  size={130} />
            )}
          </Box>
        </CardContent>
        {hovered && (
          <CardActions>
            <a href="/filedisplayvirus/" target="_blank">
            </a>
          </CardActions>
        )}
      </Card>
    </a>
  );
}