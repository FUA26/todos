import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from '../layout/Dashboard'
import MainPage from '../pages/MainPage'




const Routes = () => {
    return (
        <Router>
            <Switch>
                    <Route path="/" exact>
                        <Dashboard>
                                    <MainPage></MainPage>
                        </Dashboard>
                    </Route>
                <Route path="/test">
                            <MainPage></MainPage>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes