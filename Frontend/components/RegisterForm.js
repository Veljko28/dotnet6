import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';

const RegisterForm = () => {
  return (
    <div style={{textAlign: "center", backgroundColor: '#fcfcfc', margin: 15, padding: 20}}>
        <button className="register-facebook">
            <div style={{display: "inline-block", alignContent: 'center'}}>
            <FacebookIcon color="white"/>
                 Sign in with Facebook
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