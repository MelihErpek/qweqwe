import React from 'react'
import { BrowserRouter as Routers, Switch, Route } from "react-router-dom";
import SignUp from '../Components/Pages/SignUp'
import Login from '../Components/Pages/Login'

export default function Router() {
    return (
        <div>
            <Routers>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/Login" component={Login} />
                    <Route path="/SignUp" component={SignUp} />

                </Switch>

            </Routers>
        </div >
    )
}