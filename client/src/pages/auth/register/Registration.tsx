import React, { useState } from 'react'
import Custombutton from 'components/button/Custombutton.component'
import InputHandler from 'components/input-handler/InputHandler.component'
import './register.styles.scss'

interface RegisI {
    username: string
    email: string
    password: string
    confirmPassword: string
}
const initialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
}
function Registration() {
    const [registrationvalues, setRegistrationvalues] =
        useState<RegisI>(initialState)
    const { username, email, password, confirmPassword } = registrationvalues

    const onChangeHander = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegistrationvalues({
            ...registrationvalues,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <div className="main-reg-container">
            <div className="registration-form-container">
                <h2 className="header">Registration</h2>
                <form action="">
                    <InputHandler
                        label="Name"
                        type="text"
                        name="username"
                        value={username}
                        onChange={onChangeHander}
                    />
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
                    <InputHandler
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={onChangeHander}
                    />
                    <Custombutton
                        type="submit"
                        buttonType="register"
                        buttonText="Register"
                        disabled={
                            !!(
                                !username ||
                                !password ||
                                !email ||
                                !confirmPassword
                            )
                        }
                    />
                </form>
            </div>
        </div>
    )
}

export default Registration
