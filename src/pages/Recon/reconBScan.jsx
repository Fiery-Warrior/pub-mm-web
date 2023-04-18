import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { BsBluetooth } from 'react-icons/bs';
import Tooltip from '@mui/material/Tooltip';

import './recon.css';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <a href="http://127.0.0.1:3000/filedisplayphone" target="_blank">
      <Card
      sx={{
        minWidth: 455,
        width: '300px',
        height: '275px',
        position: 'absolute',
        top: '465px',
        left: '50px',
        '@media (max-width: 1515px)': {
          minWidth: 350,
          left: '80px',
          height: '230px',
          top: '405px',

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
                <BsBluetooth   size={72} />
                <Typography variant="h5" component="div" className='title' sx={{ mt: 1 }}>
                  Bluetooth
                </Typography>
              </>
            ) : (
              <BsBluetooth   size={130} />
            )}
          </Box>
        </CardContent>
        {hovered && (
          <CardActions>
            <a href="http://127.0.0.1:3000/sherlock/search/" target="_blank">
            </a>
          </CardActions>
        )}
      </Card>
    </a>
  );
}



// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import './recon.css';
// import { BsBluetooth } from 'react-icons/bs';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// export default function Bscanning() {
//   return (
//     <Card
//     sx={{
//       minWidth: 455,
//       width: '300px',
//       height: '275px',
//       position: 'absolute',
//       top: '465px',
//       left: '50px',
//       '@media (max-width: 1515px)': {
//         minWidth: 350,
//         left: '80px',
//         height: '230px',
//         top: '405px',

//       },
//     }}
//     className="card"
//   >

// <CardContent>
//   <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//     <BsBluetooth size={72} />
//     <Typography variant="h5" component="div" className='title' sx={{ mt: 1 }}>
//       Bluetooth
//     </Typography>
//   </Box>
// </CardContent>

//   <CardActions>
//     <Typography className='desc'>
//       Bluetooth Scanner
//     </Typography>
//   </CardActions>
// </Card>



//   );
// }