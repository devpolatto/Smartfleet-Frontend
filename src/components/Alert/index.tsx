import {Alert, AlertTitle, Snackbar, IconButton} from '@mui/material/';
import {Close} from '@mui/icons-material';

import { AlertProps} from '../../@types'

export const CustomAlert = ({
     statusOpen,
     horizontal, 
     vertical,
     vairiant,
     title,
     message,
     severity,
     handleClose
}: AlertProps) => {

  return(
     <Snackbar 
     open={statusOpen} 
     autoHideDuration={600}
     anchorOrigin={{ vertical, horizontal }}
     key={vertical + horizontal}
     >
          <Alert 
          severity={severity} 
          variant={vairiant || 'standard'} 
          action = {
               <IconButton
                    aria-label="close"
                    color="inherit"
                    sx={{ p: 0.5 }}
                    onClick={handleClose}
               >
                    <Close/>
               </IconButton>
          }
          >
               <AlertTitle>{title}</AlertTitle>
               {message}
          </Alert>
     </Snackbar>
  );
}

export default CustomAlert;