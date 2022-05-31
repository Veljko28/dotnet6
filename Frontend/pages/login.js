import React from 'react'
import LoginForm from '../components/LoginForm'
import {Grid} from '@mui/material';

const login = () => {
  return (
    <Grid container>
    <Grid item xs={3}/>
    <Grid item xs={6}>
        <LoginForm/>
    </Grid>
    <Grid item xs={3}/>
</Grid>
  )
}

export default login