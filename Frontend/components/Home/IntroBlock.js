import { Grid, Typography, Button } from '@mui/material'
import React from 'react'
import Image from 'next/image';

const IntroBlock = () => {
  return (
    <Grid container className="intro-container">
        <Grid xs={2} item/>
        <Grid xs={8} item container>
            <Grid md={6} xs={12} item style={{textAlign: "center",marginTop: 50}}>
                <Typography variant="h3" style={{fontWeight: 700}}>Earn points &amp; get worthy prizes!</Typography>
                <Typography variant="h5"  style={{fontWeight: 100}}>Million points already earned <br/>and 10,000+ prizes given away</Typography>
                <Button variant="contained" style={{backgroundColor: "white", color: "#0cafe5", marginTop: 25}}>Start earning</Button>
            </Grid>            
            <Grid md={6} xs={12} item>
                <Image src="/gift-cards.jpg" width={550} height={350} style={{borderRadius: 5}}/>
            </Grid>            
        </Grid>
        <Grid xs={2} item/>
    </Grid>
  )
}

export default IntroBlock