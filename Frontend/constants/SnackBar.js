import {Snackbar, Alert} from '@mui/material';
import React from "react";




export const SnackBarSuccess = ({snackBarOpen,changeSnackBarOpen,message}) => {
   return (<Snackbar 
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={snackBarOpen} autoHideDuration={5000} onClose={() => changeSnackBarOpen(false)}>
        <Alert onClose={() => changeSnackBarOpen(false)} severity="success">
          {message}
        </Alert>
     </Snackbar>)
}


export const SnackBarFailed = ({snackBarOpen,changeSnackBarOpen,message}) => {
   return (<Snackbar 
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={snackBarOpen} autoHideDuration={5000} onClose={() => changeSnackBarOpen(false)}>
        <Alert onClose={() => changeSnackBarOpen(false)} severity="error">
          {message}
        </Alert>
     </Snackbar>)
}