import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TitleChange from '../constants/TitleChange';

const LoginForm = () => {
  return (
    <div style={{textAlign: "center", backgroundColor: '#fcfcfc', margin: 15, padding: 20}}>
        <TitleChange title="Login"/>
        <button className="register-google">
            <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
              }}>
                 <GoogleIcon color="white" style={{fontSize: 20}}/>
                 <span style={{marginLeft: 10, fontSize: 18}}>
                    Continue with Google
                 </span>
            </div>
        </button>
        <button className="register-facebook">
            <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
              }}>
                 <FacebookIcon color="white" style={{fontSize: 20}}/>
                 <span style={{marginLeft: 10, fontSize: 18}}>
                    Continue with Facebook
                 </span>
            </div>
        </button>
        <br/>
        <hr/>
        <h2 style={{color: '#0cafe5'}}>Login</h2>
        <input placeholder="UserName" className="register-input"/>
        <br/>
        <input placeholder="Password" type="password"  className="register-input" />
        <br/>
        <button className="register-button">
            Login
        </button>
    </div>
  )
}

export default LoginForm