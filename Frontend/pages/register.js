import React from 'react'
import { Grid } from '@mui/material';
import RegisterForm from '../components/RegisterForm';

const register = () => {
  return (
    <Grid container>
        <Grid item xs={3}/>
        <Grid item xs={6}>
            <RegisterForm/>
        </Grid>
        <Grid item xs={3}/>
    </Grid>
  )
}

export default register