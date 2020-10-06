import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
// import Sidebar from '../components/navigation/sidebar';
// import Navbar from '../components/navigation/navBar';
import Protected from '../components/common/protected';
import Sidebar from '../components/navigation/sidebar';
import NavBar from '../components/navigation/navBar';


const useStyles = makeStyles((theme) => ({

}));

export default function Login(props) {
    const classes = useStyles();
    let history = useHistory();
    const [auth, setAuth] = useState(false)

    const loginClick = () => {
        console.log("login")
        // history.push('/')
        setAuth(true)
        console.log(auth)
        // props.auth(true)

    }

    return (
        <div>

            {!auth ?
                <Grid container spacing={1}>
                    <Grid item md={6}>
                        <div className="job-company-login-left">

                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="job-company-login-right">
                            <div className="job-company-login-card">
                                <h3>Login</h3>
                                <span style={{ fontSize: "12px" }}>Please enter your username and password to login</span>
                                <div className="job-company-login-input">
                                    <TextField
                                        id="standard-password-input"
                                        label="Email"
                                        type="email"
                                        autoComplete="current-password"
                                    />
                                </div>
                                <div className="job-company-login-input">
                                    <TextField
                                        id="standard-password-input"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                    />
                                </div>
                                <Button variant="contained" color="primary" onClick={() => loginClick()}>
                                    Submit
                        </Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                : <Protected auth={true}></Protected>}
        </div>
    )
}
