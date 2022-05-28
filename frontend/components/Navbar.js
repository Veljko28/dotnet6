import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Grid } from '@mui/material';

const Navbar = () => {
  return (
    <nav>
        <Grid container style={{paddingTop: 10}}>
            <Grid item xs={6} style={{padding: 10, paddingLeft: 0}}>
                    <span style={{padding: 10}}>
                        <Link href="/">Home</Link>
                    </span>
                    <span style={{padding: 10}}>
                        <Link href="/register">Register</Link>  
                    </span>
                    <span style={{padding: 10}}>
                        <Link href="/login">Login</Link>
                    </span>
                </Grid>
            <Grid item xs={4} >
                    <Image src="/logo.png" width={75} height={45} />
            </Grid>
            <Grid item xs={2}/>
        </Grid>
    </nav>
  )
}

export default Navbar