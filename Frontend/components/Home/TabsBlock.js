import React from 'react'
import {Grid, Typography} from '@mui/material';
import Image from 'next/image';


const TabsBlock = () => {
  return (
    <Grid container>
        <Grid xs={2}/>
        <Grid xs={8}>
            <Grid xs={4} className="tabs-card">
                <Image src="" width={50} height={50}/>
                <Typography variant="subtitle1"></Typography>
            </Grid>
            <Grid xs={4} className="tabs-card">
                <Image src="" width={50} height={50}/>
                <Typography variant="subtitle1"></Typography>
            </Grid>
            <Grid xs={4} className="tabs-card">
                <Image src="" width={50} height={50}/>
                <Typography variant="subtitle1"></Typography>
            </Grid>
        </Grid>
        <Grid xs={2}/>
    </Grid>
  )
}

export default TabsBlock