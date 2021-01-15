import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from '../layout/Dashboard'
import Login from '../pages/Login'
import MainPage from '../pages/MainPage'
import AuthenticationRoute from './auth-router'




const Routes = () => {
    return (
        <Router>
                <Route exact path="/login">
                    <Login></Login>
                </Route>
            <Switch>
                <AuthenticationRoute path="/" exact>
                    <Dashboard>
                        <MainPage></MainPage>
                    </Dashboard>
                </AuthenticationRoute>
            </Switch>
        </Router>
    )
}

export default Routes