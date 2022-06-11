import React from 'react'
import {Grid} from '@mui/material'
import TitleChange from '../../constants/TitleChange'
import JobCard from '../../components/JobCard'
import {useRouter} from 'next/router'
import Pages from '../../constants/Pages'


const jobsList = [
    {
        image: "/microsoft.png",
        title: "Create ASP.NET CORE API",
        desc: "Create a quick api for login/register users and storing them in a database. Use JWT tokens for login and staying logged in.",
        points: 2500,
        time: "2h"
    },
    {
        image: "/google.png",
        title: "Google Maps API",
        desc: "Get a google maps api credentals key. Do the full procedure and implement a google map. On the map put a pin on three of the most populated cities.",
        points: 3100,
        time: "3h"
    },
    {
        image: "/dji.png",
        title: "Film a video with DJI drone",
        desc: "Film a 5 minute clip of your town and edit it into a short highlight film. Use one of our DJI drones (any version works).",
        points: 3250,
        time: "5h"
    },
    {
        image: "/tesla.png",
        title: "Testing Tesla Servers",
        desc: "You will get a copy of our test server. Try to break it! Use any method you can and if you sucsessed you will get rewarded.",
        points: 5000,
        time: "24h"
    },
]

const jobs = () => {

  const router = useRouter()
  const id = router.query['id'];

  return (
    <Grid container style={{backgroundColor: '#0cafe5', padding: 20, textAlign: "center"}}>
      <TitleChange title="Jobs"/>
      <Grid item xs={1}/>
      <Grid item xs={10}>
          <h1 style={{color: 'white'}}>Jobs</h1>
          {jobsList.map(x => <JobCard key={x.id} {...x}/>)}
      </Grid>
      <Grid item xs={1}/>
      <Grid xs={12} item style={{display: "flex", justifyContent: "center", margin: 10}}>
        <Pages pageId={id} numOfPages={5}/>
      </Grid>
    </Grid>
  )
}

export default jobs