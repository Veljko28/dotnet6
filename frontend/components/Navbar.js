import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Grid } from '@mui/material';

const Navbar = () => {
  return (
    <nav>
        <Grid container style={{paddingTop: 10, backgroundColor: '#fff', borderBottom: '2px solid #999'}}>
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
        </Grid>
    </nav>
  )
}

export default Navbar