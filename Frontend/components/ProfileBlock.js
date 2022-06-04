import { Grid, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import TitleChange from '../constants/TitleChange';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';


const prizes = [
  {
    image: "/prize.png",
    name: "Prize 1"
  },
  {
    image: "/prize.png",
    name: "Prize 2"
  },
  {
    image: "/prize.png",
    name: "Prize 3"
  }
]

const MapPrizes = ({image, name}) => {
   return (
    <span style={{display: "inline-block", margin: 15, textAlign: 'center'}}>
      <Image src={image} width={125} height={125}/>  
      <Typography variant="subtitle1">{name}</Typography>
    </span>
   )
}

const ProfileBlock = ({id}) => {
  return (
    <Grid container className="profile-container">
        <TitleChange title={`User ${id} Profile`}/>
        <Grid xs={4} item style={{textAlign: "center"}}>
            <Image src="/user.png" width={150} height={150}/>
            <Typography variant="h5">User {id}</Typography>
        </Grid>
        <Grid xs={8} item>
            <Typography variant="h4">User Stats</Typography>
            <Typography variant="h6"><CalendarMonthIcon style={{fontSize: 20, marginRight: 5, color: "#0cafe5"}}/>Joined <span style={{color: "#0cafe5"}}>Jun 2022</span></Typography>
            <Typography variant="h6"><Image src="/points.png" width={10} height={15} /> Earned Points: <span style={{color: "#0cafe5"}}>162400</span></Typography>
            <Typography variant="h6"><EmojiEventsIcon style={{fontSize: 20, marginRight: 5, color: "#0cafe5"}}/>Prizes taken <span style={{color: "#0cafe5"}}>5</span></Typography>
            <Typography variant="h5" style={{marginTop: 15}}>Latest Prizes Taken: </Typography>
            <div>
                {prizes.map((x,idx) => <MapPrizes key={idx} {...x}/>)}
            </div>
        </Grid>
    </Grid>
  )
}

export default ProfileBlock