import { useState } from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

interface ToastSnackbarInterface {
     setOpen: boolean;
     message: string;
}

export interface SnackbarInterface extends SnackbarOrigin {
     open: boolean;
     // vertical: 'top' | 'bottom';
     // horizontal: 'left' | 'center' | 'right';
}

export default function ToastSnackbar({setOpen, message}: ToastSnackbarInterface) {
     const [state, setState] = useState<SnackbarInterface>({
       open: setOpen,
       vertical: 'top',
       horizontal: 'right',
     });
     const { vertical, horizontal, open,} = state;
   
     const handleClose = () => {
       setState({ ...state, open: false });
     };
   
     return (
       <div>
         <Snackbar
           anchorOrigin={{ vertical, horizontal }}
           open={open}
           onClose={handleClose}
           message={message}
           key={vertical + horizontal}
         />
       </div>
     );
   }