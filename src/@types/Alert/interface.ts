export interface AlertProps {
     statusOpen: boolean;
     title: string | null;
     message: string;
     severity: 'error' | 'warning' | 'info' | 'success'
     vertical: 'top' | 'bottom';
     horizontal: 'left' | 'center' | 'right';
     vairiant: 'filled' | 'outlined' | 'standard';
     handleClose?: () => void;
}