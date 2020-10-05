import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

import React, { useState } from 'react'
import Login from "../../views/login";
import Navbar from "../navigation/navBar";

let isAuthenticate = false

export default function Protected(props) {


    const [auth, setAuth] = useState(false)

    const authFunction = (l) => {
        console.log(l)
        setAuth(l)

    }
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Login ></Login>
                    </Route>

                    <PrivateRoute>
                        <Route path="/dashboard">
                            <Navbar></Navbar>
                        </Route>
                    </PrivateRoute>
                </Switch>
            </Router>
        </div>
    )
}


function PrivateRoute({ children, ...rest }) {
    console.log(isAuthenticate)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                true ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}