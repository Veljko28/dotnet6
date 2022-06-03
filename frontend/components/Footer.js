import React from 'react';
import {Grid} from '@mui/material';
import Link from 'next/link';


import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

  const [loggedin,handleLoggedIn] = React.useState(false);
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

  return (
    <Grid container className="footer-container">
        <Grid item xs={4}>
          <p style={{fontSize: 14, color: '#999', marginLeft: 37.5}}>Navigation</p>
          <ul className="footer-list">
            <li><Link href="/home">Home</Link></li>
            {loggedin ? (
              <>
                <li><Link href="/prizes">Prizes</Link></li>
                <li><Link href="/profile">Profile</Link></li>
              </>
            ) : (
              <>
                <li><Link href="/register">Register</Link></li>
                <li><Link href="/login">Login</Link></li>
              </>
            )}
          </ul>
        </Grid>
        <Grid item xs={4} style={{textAlign: "center", marginTop: 25}}>
            <Link href="/terms">Terms of service</Link>
            <br/>
            <Link href="/about">About</Link>
            <p style={{fontSize: 14, color: '#999'}}>Points Project &copy; Copyright 2022</p>
        </Grid>
        <Grid item xs={4} style={{textAlign: 'center'}}>
        <p style={{fontSize: 14, color: '#999', marginLeft: 37.5}}>Social Media</p>
          <ul className="footer-list">
            <li>
              <a href=""  className="icon-adjust">
                <FacebookIcon/> 
                <span style={{marginLeft: 10}}>Facebook</span>
              </a>
            </li>

            <li>
              <a href=""  className="icon-adjust">
                <TwitterIcon/> 
                <span style={{marginLeft: 20}}>Twitter</span>
              </a>
            </li>

            <li>
              <a href=""  className="icon-adjust">
                <LinkedInIcon/> 
                <span style={{marginLeft: 15}}>LinkedIn</span>
              </a>
            </li>
          </ul>
        </Grid>
    </Grid>
  )
}

export default Footer