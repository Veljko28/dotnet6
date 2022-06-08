import React from 'react'
import {Grid, Typography} from '@mui/material';
import Image from 'next/image';


const TabsBlock = () => {
  return (
    <>
        <Grid container style={{padding: 50, backgroundColor: "#0cafe5"}}>
            <Grid xs={2} item/>
            <Grid xs={8} item container>
                <Grid item lg={1}/>
                <Grid md={6} lg={3} xs={12} item className="tabs-card">
                    <Image src="/icon1.png" width={100} height={100}/>
                    <Typography variant="h5" className="tab-title">Work From Anywhere</Typography>
                    <Typography variant="subtitle1" style={{marginTop: 10}}>
                        Earn points from anywhere around the world with just an internet connection.
                        Doesn't matter if you are from Brazil or Japan, you can earn points and get rewards.
                    </Typography>
                </Grid>
                <Grid md={6} lg={3} xs={12} item className="tabs-card">
                    <Image src="/icon2.png" width={100} height={100}/>
                    <Typography  variant="h5" className="tab-title">Progression</Typography>
                    <Typography variant="subtitle1" style={{marginTop: 10}}>
                        As you get better your point rewards increase and you get more rewards.
                        The job providers trust you more the more you do and in return you make more points.
                    </Typography>
                </Grid>
                <Grid md={6} lg={3} xs={12} item className="tabs-card">
                    <Image src="/icon3.png" width={100} height={100}/>
                    <Typography variant="h5" className="tab-title">Security</Typography>
                    <Typography variant="subtitle1" style={{marginTop: 10}}>
                        Our support team works 24/7 to provide you with the best service to any problems you may have.
                        If you are feeling stuck or need any help using our website contact our support team.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={2}/>
        </Grid>
    
    </>
  )
}

export default TabsBlock