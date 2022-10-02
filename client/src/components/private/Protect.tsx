import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Login from '../../pages/auth/login/Login'

interface Props {
    user: {
        email: string
        name: string
    }
}
function Protect(props: Props) {
    console.log(props.user.email)
    const location = useLocation()
    //   const [user, setUser] = useState(true);
    return props.user.email !== '' ? <Outlet /> : <Login />
}

export default Protect
