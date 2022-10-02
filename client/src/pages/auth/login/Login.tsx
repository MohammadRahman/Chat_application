import React, { SyntheticEvent, useState } from 'react'
import Custombutton from 'components/button/Custombutton.component'
import InputHandler from 'components/input-handler/InputHandler.component'
import './login.styles.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'

interface LoginI {
    email: string
    password: string
}
const initialState = {
    email: '',
    password: '',
}
function Login() {
    const [loginCredential, setLoginCredentials] =
        useState<LoginI>(initialState)
    const [error, setError] = useState({})
    const { email, password } = loginCredential

    const onChangeHander = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginCredentials({
            ...loginCredential,
            [event.target.name]: event.target.value,
        })
    }
    // make API call to Backend
    async function sendCredentials(email: string, password: string) {
        try {
            const response = await axios.post('', { email, password })
            // if(credentials matches then redirect otherwise thorow error)
        } catch (error: any) {
            setError(error)
        }
    }

    const submitHandler = (e: SyntheticEvent) => {
        e.preventDefault()
        sendCredentials(email, password)
    }
    return (
        <div className="main-login-container">
            <div className="login-form-container">
                <h3 className="header">Login</h3>
                <form action="">
                    <InputHandler
                        label="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChangeHander}
                    />
                    <InputHandler
                        label="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChangeHander}
                    />
                    <Custombutton
                        type="submit"
                        buttonType="login"
                        buttonText="Submit"
                        disabled={(!email || !password)}
                    />
                    <p className="redirect-text">
                        don't have an account?{' '}
                        <Link to="/registration">register here</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
