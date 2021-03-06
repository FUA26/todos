import React from 'react'
import { fullLogo, illus } from '../../assets'
import Logo from '../../components/atoms/Logo'
import LoginForm from '../../components/molecules/FormLogin'
import './login.scss'

function Login() {
    return (
        <div className="login">
            <div className="login__left">
                <div>
                    <Logo src={fullLogo}></Logo>
                </div>
                <div className="login__left__content">
                    <h1>Login</h1>
                    <p>Login with data your inserted when registration.</p>
                    <LoginForm></LoginForm>
                </div>
            </div>
            <div className="login__right">
                <div className="content">
                    <img src={illus} alt="ilustrasi"></img>
                </div>
            </div>
            
        </div>
    )
}

export default Login
