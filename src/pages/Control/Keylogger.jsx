import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { GiKeyboard } from 'react-icons/gi';
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
    <a href="/filedisplaykey/" target="_blank">
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
      }}
        className="card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            {hovered ? (
              <>
                <GiKeyboard size={72} />
                <Typography variant="h5" component="div" className='title' sx={{ mt: 1 }}>
                  Keylogger
                </Typography>
              </>
            ) : (
              <GiKeyboard size={130} />
            )}
          </Box>
        </CardContent>
        {hovered && (
          <CardActions>
            <a href="/filedisplaykey/" target="_blank">
            </a>
          </CardActions>
        )}
      </Card>
    </a>
  );
}
