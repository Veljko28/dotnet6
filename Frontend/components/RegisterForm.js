import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TitleChange from '../constants/TitleChange';

const RegisterForm = () => {
  return (
    <div style={{textAlign: "center", backgroundColor: '#fcfcfc', margin: 15, padding: 20}}>
        <TitleChange title="Register"/>
        <button className="register-facebook">
            <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
              }}>
                 <FacebookIcon color="white" style={{fontSize: 20}}/>
                 <span style={{marginLeft: 10, fontSize: 18}}>
                    Sign in with Facebook
                 </span>
            </div>
        </button>
        <br/>
        <hr/>
        <h2 style={{color: '#0cafe5'}}>Sign In</h2>
        <input placeholder="UserName" className="register-input"/>
        <br/>
        <input placeholder="Email"  className="register-input" />
        <br/>
        <input placeholder="Password"  className="register-input" />
        <br/>
        <input placeholder="Confirm Password"  className="register-input"/>
        <br/>
        <button className="register-button">
            Sign In
        </button>
    </div>
  )
}

export default RegisterForm