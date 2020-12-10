import React, { useContext } from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import ProjectMenu from '../pages/projectMenu'
import NavBar from './NavBar/NavBar'
import SignInForm from './signInForm'
import SignUpForm from './signUpForm lvl 3 bis/signUpForm lvl 3 bis'
import { AuthContext } from "../App"
import Project from '../pages/project'
import TaskMenu from '../pages/taskMenu'
// tag: [router]
// Ce que j'ai appris :
// - withRouter permet d'accéder au parametre location, qui donne peut donner le pathname d'une url
const RoutesManagement = withRouter(({ location }) => {
    const { state } = useContext(AuthContext)
    return (
        <div>
            {
                (location.pathname == "/home" || location.pathname == "/project" || location.pathname == "/project/" || location.pathname == "/task") && <NavBar />
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
                    {/* remarque: J'utilise le composant Redirect au lieu de metre le composant SignIn
                        Pourquoi ? Car la navbar ne s'affiche pas. La navbar s'affiche ou non en fonction de la route
                                    Si je mets le comosant SignIn, la route reste /home*/}
                    {state.isAuthenticated ? <div> HOME </div> : <Redirect to="/signin" />}
                </Route>
                <Route path="/task" exact>
                    {state.isAuthenticated ? <TaskMenu /> : <Redirect to="/signin" />}
                </Route>
                <Route path="/project" exact>
                    {state.isAuthenticated ? <ProjectMenu /> : <Redirect to="/signin" />}
                </Route>
                <Route path="/project/:id">
                    {state.isAuthenticated ? <div><NavBar /> <Project /> </div> : <Redirect to="/signin" />}
                </Route>

            </Switch>

        </div>
    )

})





export default RoutesManagement
