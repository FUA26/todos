import React from 'react';
import { 
    Route,
    Redirect
} from 'react-router-dom'

const checkAuth= () =>{
    var session = sessionStorage.getItem("todoUser")
    // console.log("Session",session)
    if (session !=null) {
        return true
    }
    return false
}

const AuthenticationRoute = ({children, ...rest}) => (
    <Route
      {...rest}
      render={({ location }) =>
      checkAuth() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
)

export default AuthenticationRoute