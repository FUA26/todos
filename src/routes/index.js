import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPage from '../pages/MainPage'




const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <MainPage></MainPage>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes