import React from 'react'
import {useRouter} from 'next/router';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TitleChange from '../constants/TitleChange';
import formatYupError from '../constants/formatYupError';
import YupError from '../constants/YupError';
import { SnackBarSuccess } from '../constants/SnackBar';
import * as yup from 'yup';


const yupSchema = yup.object().shape({
    userName: yup.string().min(5).max(150),
    email: yup.string().min(10).max(255).email(),
    password: yup.string().min(7).max(255)
  })

const RegisterForm = () => {

    const router = useRouter();

    const [errors,changeErrors] = React.useState([]);

    const [snackBar,changeSnackBar] = React.useState({
        error: false,
        success: false,
        loading: false
    })


    const verify = async () => {
        const form = {
            userName: document.getElementById("userName").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            confirm_password: document.getElementById("confirm_password").value,
        }
        console.log(form);
    try {
        await yupSchema.validate(form, {abortEarly: false});
        if (form.password !== form.confirm_password) {
          changeErrors([{
            message: "Confirm Password must match the password",
            path: "confirm_password"
          }])
          return;
        }
      }
      catch (err) {
        changeErrors((formatYupError(err)));
        return;
      }
      
      changeSnackBar({...snackBar,success: true});
      setTimeout(() => router.push('/login'), 1500);
    }



  return (
    <div style={{textAlign: "center", backgroundColor: '#fcfcfc', margin: 15, padding: 20}}>
        <TitleChange title="Register"/>
        <button className="register-google">
            <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
              }}>
                 <GoogleIcon color="white" style={{fontSize: 20}}/>
                 <span style={{marginLeft: 10, fontSize: 18}}>
                    Sign in with Google
                 </span>
            </div>
        </button>
        <button className="register-facebook">
            <div className="icon-adjust">
                 <FacebookIcon color="white" style={{fontSize: 20}}/>
                 <span style={{marginLeft: 10, fontSize: 18}}>
                    Sign in with Facebook
                 </span>
            </div>
        </button>
        <br/>
        <hr/>
        <h2 style={{color: '#0cafe5'}}>Sign In</h2>
        <input placeholder="UserName" className="register-input" id="userName"/>
        <YupError errors={errors} path="userName"/>
        <br/>
        <input placeholder="Email"  className="register-input" id="email" />
        <YupError errors={errors} path="email"/>
        <br/>
        <input placeholder="Password" type="password" className="register-input" id="password" />
        <YupError errors={errors} path="password"/>
        <br/>
        <input placeholder="Confirm Password"  type="password" className="register-input" id="confirm_password" />
        <YupError errors={errors} path="confirm_password"/>
        <br/>
        <button className="register-button" onClick={async () => await verify()}>
            Sign In
        </button>

        <SnackBarSuccess snackBarOpen={snackBar.success} changeSnackBarOpen={() => changeSnackBar({...snackBar, success: false})} message="Successfully registered"/>
    </div>
  )
}

export default RegisterForm