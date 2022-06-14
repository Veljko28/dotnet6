import React from 'react'
import { useRouter } from 'next/router';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TitleChange from '../constants/TitleChange';
import {SnackBarSuccess, SnackBarFailed} from '../constants/SnackBar';
import { CircularProgress, Checkbox, Typography } from '@mui/material';

const test = {
    userName: "testUser",
    password: "testpassword"
};

const LoginForm = () => {

    const router = useRouter();

    const [keepLoggedChecked, changeKeepLoggedChecked] = React.useState(false);
    const [snackBar,changeSnackBar] = React.useState({
        error: false,
        success: false,
        loading: false
    })

    const verify = () => {
        changeSnackBar({
           ...snackBar,
            loading: true
        })
        const userName = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (userName == test.userName && password == test.password){
            changeSnackBar({
                error: false,
                success: true,
                loading: false
            })
            localStorage.setItem('jid','test');
            setTimeout(() => {
                router.push(`/`)
             }, 1500)
        }
        else {
            changeSnackBar({
                error: true,
                success: false,
                loading: false
            })
        }
    }

  return (
    <div style={{backgroundColor: '#fcfcfc', margin: 15, padding: 20}}>
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
        <h2 style={{color: '#0cafe5', textAlign: "center"}}>Login</h2>
        <input placeholder="UserName" className="register-input" id="username"/>
        <br/>
        <input placeholder="Password" type="password"  className="register-input" id="password" />
        <br/>
        <div>
          <Checkbox style={{display: "inline-block"}} onChange={(e) => {
              changeKeepLoggedChecked(e.target.checked);
          }}/>
          <Typography style={{display: "inline-block"}} variant="subtitle2">Keep Me Logged In</Typography>
        </div>
        <br/>
        <button className="register-button" onClick={() => verify()}>
            {snackBar.loading ? <CircularProgress  style={{color: '#fff'}} size={13} /> : "Login"}
        </button>


        <SnackBarSuccess snackBarOpen={snackBar.success} changeSnackBarOpen={() => changeSnackBar({...snackBar, success: false})} message="Successfully logged-in !"/>

        <SnackBarFailed snackBarOpen={snackBar.error} changeSnackBarOpen={() => changeSnackBar({...snackBar, error: false})} message={"Failed to login"}/>
    </div>
  )
}

export default LoginForm