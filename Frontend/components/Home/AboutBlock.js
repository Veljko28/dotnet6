import { Grid, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image';

const AboutBlock = () => {
  return (
    <Grid container className="about-container">
        <Grid xs={2} item/>
        <Grid xs={8} item container>
            <div>
                <Typography variant="h3" style={{fontWeight: 700, borderTop: "3px solid #0cafe5"}}>About</Typography>
            </div>
            <div>
                <Typography variant="h6"  style={{fontWeight: 100}}>This website is made for people who want to get a quick buck 
                doing simple jobs/tasks and earning points. With those points they can withdraw gift cards, items and money to their credit card or Paypal.
                <br/>
                <br/>
                We always update our prizes and rewards. If you want us to add some item, or have a problem with your job/task contant our support team.</Typography>
            </div>
        </Grid>
        <Grid xs={2} item/>
    </Grid>
  )
}

export default AboutBlock