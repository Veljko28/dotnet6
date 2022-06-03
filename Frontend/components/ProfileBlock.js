import { Grid, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const ProfileBlock = ({id}) => {
  return (
    <Grid container className="profile-container">
        <Grid xs={4} item style={{textAlign: "center"}}>
            <Image src="/user.png" width={150} height={150}/>
            <Typography variant="h5">User {id}</Typography>
        </Grid>
        <Grid xs={8} items >
            <Typography variant="h4">User Stats</Typography>
            <Typography variant="h6" style={{marginLeft: 25}}><CalendarMonthIcon style={{fontSize: 20, marginRight: 5, color: "#0cafe5"}}/>Joined <span style={{color: "#0cafe5"}}>Jun 2022</span></Typography>
            <Typography variant="h6" style={{marginLeft: 25}}><Image src="/points.png" width={10} height={15} /> Earned Points: <span style={{color: "#0cafe5"}}>400</span></Typography>
            <Typography variant="h6" style={{marginLeft: 25}}><EmojiEventsIcon style={{fontSize: 20, marginRight: 5, color: "#0cafe5"}}/>Prizes taken <span style={{color: "#0cafe5"}}>0</span></Typography>
        </Grid>
    </Grid>
  )
}

export default ProfileBlock