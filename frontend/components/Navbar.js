import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Grid } from '@mui/material';

const cdd = new Date(new Date().getTime() + 600000).getTime(); // 10 minutes


const Navbar = () => {
    const [loggedin,handleLoggedIn] = React.useState(false);
    const [pointsMessage,handlePointsMessage] = React.useState("");
    let jwt=null
    React.useEffect( () => {
        if (typeof window !== 'undefined') {
            jwt = localStorage.getItem('jid');
            console.log(jwt);
            if (jwt != null){
                handleLoggedIn(true);
            }
        }
    })
    
    let func = setInterval(() => {
        let now = new Date().getTime();
        let distance = cdd - now;

        if (distance < 0){
            clearInterval(func);
            handlePointsMessage("Click for 100");
            return;
        }

        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        handlePointsMessage("Points in "+ (minutes < 10 ? "0"+minutes.toString() : minutes.toString())+":"+ 
        (seconds < 10 ? "0"+seconds.toString() : seconds.toString()));
    },1000)

  return (
    <nav>
        <Grid container style={{paddingTop: 10, paddingBottom: 5, backgroundColor: '#fff', borderBottom: '2px solid #999'}}>
            {loggedin ? (
                <>
                    <Grid item xs={6} style={{padding: 15}}>
                        <span style={{padding: 10}} className="nav-link">
                            <Link href="/">Home</Link>
                        </span>
                        <span style={{padding: 10}} className="nav-link">
                            <Link href="/prizes">Prizes</Link>  
                        </span>
                        <span style={{padding: 10, color: '#0cafe5'}}>
                            {pointsMessage == "Click for 100" ? (
                                <span className="hover-ptr">
                                {pointsMessage} <Image src="/points.png" width={10} height={15} /> ! 
                                </span>
                            ) : (<>{pointsMessage}</>)} 
                        </span>
                    </Grid>
                    <Grid item xs={3} >
                            <Image src="/logo.png" width={85} height={45} />
                    </Grid>
                    <Grid item xs={3} style={{padding: 15}}>
                        <span style={{padding: 10, color: '#0cafe5'}} >
                            Points: 400 
                        </span>
                        <span style={{padding: 10}} className="nav-link">
                            <Link href={`/profile/${jwt}`}>Profile</Link>  
                        </span>
                        <span style={{padding: 10}} className="nav-link" onClick={() => {
                            localStorage.clear();
                            location.reload();
                        }}>
                           Logout  
                        </span>
                    </Grid>
                </>
            ) : 
            (
                <>
                <Grid item xs={6} style={{padding: 15}}>
                        <span style={{padding: 10}} className="nav-link">
                            <Link href="/">Home</Link>
                        </span>
                        <span style={{padding: 10}} className="nav-link">
                            <Link href="/register">Register</Link>  
                        </span>
                        <span style={{padding: 10}} className="nav-link">
                            <Link href="/login">Login</Link>
                        </span>
                    </Grid>
                <Grid item xs={4} >
                        <Image src="/logo.png" width={85} height={45} />
                </Grid>
                <Grid item xs={2}/>
                </>
            )}
        </Grid>
    </nav>
  )
}

export default Navbar