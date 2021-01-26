import { AES, enc } from 'crypto-js';
import React from 'react';
import { useDispatch } from 'react-redux';
import { 
    Route,
    Redirect
} from 'react-router-dom'
import { updateUser } from '../config/redux/actions/loginAction';

function getStorage() {
    var ciphertext = localStorage.getItem("todoUser")
    var bytes  = AES.decrypt(ciphertext, 'secret key 123');
    var decryptedData = JSON.parse(bytes.toString(enc.Utf8));
    return decryptedData
}

function AuthenticationRoute({children, ...rest}){
    const dispatch = useDispatch()

    const checkAuth= () =>{
        var session = sessionStorage.getItem("todoUser")
        console.log(session)
        if (session !=null) {
            dispatch(updateUser(getStorage()))
            return true
        }
        return false
    }

    return(
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
}


export default AuthenticationRoute