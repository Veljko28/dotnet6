import React from 'react'
import {Grid, Typography} from '@mui/material'

const about = () => {
  return (
    <Grid container style={{backgroundColor: "#fff", paddingTop: 25, height: 600}}>
        <Grid xs={2} item/>
        <Grid xs={8} item>
            <Typography variant="h3" style={{borderBottom: "2px solid #999", textAlign:"center", padding: 15}}>About</Typography>
            <Typography variant="h6" style={{margin: 10, fontWeight: 700, borderBottom: "2px solid #999", textAlign: "center", padding: 15}}>
                This website gives you an opportunity to earn money online using your skills.
                With out support team always stay up to date and get the help you need.
            </Typography>
            <Typography variant="h6" style={{margin: 10, textAlign: "center", padding: 15}}>
                Rated by many to be the best freelancing website out there, we provide the neccessary connection 
                between you and the top companies in the world. Work with our clients and earn points. The points which
                you accumulate over time can be withdrawn for prizes/money. To get started you need to sign up and provide a 
                vaild indentification. From then on apply for jobs and you will get them based of the requirements needed for this project.
            </Typography>
        </Grid>
        <Grid xs={2} item/>
    </Grid>
  )
}

export default about