import React from 'react'
import {Button, Grid,Typography} from '@mui/material';
import Image from 'next/image';

const JobCard = (props) => {
  return (
    <Grid container className="jobs-container">
        <Grid xs={12} md={4} item>
            <div>
                <Image src={props.image} width={100} height={100} />
            </div>
        </Grid>
        <Grid xs={12} md={8} item>
        <Typography variant="h6" style={{fontWeight: 600}}>
            {props.title}
        </Typography>
        <Typography variant="subtitle2">
            {props.desc}
            <br/>
            <div style={{display: "flex", justifyContent: "flex-end", marginRight: 15}}>
                Time: {props.time}
            </div>
        </Typography>
        <Typography variant="subtitle1" className="price-tab">
            <div style={{color: "#0cafe5"}}>
                Reward: {props.points} <Image src="/points.png" width={10} height={15} />  
            </div>
            <div style={{marginRight: 15}}>
                <Button variant="contained" style={{backgroundColor: "#0cafe5", color: "white"}}>Apply</Button>
            </div>
        </Typography>
        
        </Grid>
    </Grid>
  )
}

export default JobCard