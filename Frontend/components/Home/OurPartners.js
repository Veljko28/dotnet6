import { Grid, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'

const images = [
  '/microsoft.png',
  '/panasonic.png',
  '/dji.png',
  '/acer.png',
  '/sony.png',
  '/google.png',
  '/amd.png',
  '/tesla.png',
  '/att.png',
]


const OurPartners = () => {
  return (
    <Grid container className="about-container">
        <Grid xs={2} item/>
        <Grid xs={8} item container>
            <Typography variant="h3" style={{fontWeight: 700, borderTop: "3px solid #0cafe5", width: "100%", padding: 15}}>Our Sponsors and Partners: </Typography>
            <br/>
              {images.map((x,idx) => 
              (
                  <div key={idx} style={{margin: 15}}>
                      <Image src={x} width={150} height={150}  />
                  </div>
              )
              )}
        </Grid>
        <Grid xs={2} item/>
    </Grid>
  )
}

export default OurPartners