import { Grid, Typography, Button } from '@mui/material'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const IntroBlock = () => {

    const [loggedin,handleLoggedIn] = React.useState(false);
    let jwt=null
    React.useEffect( () => {
        if (typeof window !== 'undefined') {
            jwt = localStorage.getItem('jid');
            if (jwt != null){
                handleLoggedIn(true);
            }
        }
    })

  return (
    <Grid container className="intro-container">
        <Grid xs={2} item/>
        <Grid xs={8} item container>
            <Grid md={6} xs={12} item style={{textAlign: "center",marginTop: 50}}>
                <Typography variant="h3" style={{fontWeight: 700}}>Earn points &amp; get worthy prizes!</Typography>
                <Typography variant="h5"  style={{fontWeight: 100}}>Million points already earned <br/>and 10,000+ prizes given away</Typography>
                <Link href={loggedin ? "/jobs/1" : "/register"}>
                  <Button variant="contained" style={{backgroundColor: "white", color: "#0cafe5", marginTop: 25}}>Start earning</Button>
                </Link>                
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