import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Project from '../pages/project'
import NavBar from './NavBar/NavBar'
import SignInForm from './signInForm'
import SignUpForm from './signUpForm lvl 3 bis/signUpForm lvl 3 bis'

// Ce que j'ai appris :
// - withRouter permet d'accéder à 
const RoutesManagement = withRouter(({ location }) => {
    return (
        <div>
            {
                location.pathname != "/signin" && location.pathname != "/signup" && location.pathname != "/" && <NavBar />
            }
            <Switch>
                <Route path="/" exact >
                    <SignInForm />
                </Route>
                <Route path="/signin" >
                    <SignInForm />
                </Route>
                <Route path="/signup" >
                    <SignUpForm />
                </Route>
                <Route path="/home"  >
                    <div> HOME </div>
                </Route>
                <Route path="/project" >
                    <Project />
                </Route>
            </Switch>

        </div>
    )

})





export default RoutesManagement
