import React from 'react'
import { Redirect } from 'react-router-dom'
import { Logout } from '../../utils/api'

export default function Logout(props) {

    removeToken()
    // props.history.push('/login') 
    // ^^^ This will only return us if we refresh the page.
    return <Redirect to="/login" />
}