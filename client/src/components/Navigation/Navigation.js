import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { getToken } from '../../utils/api'

const Navigation = () => {

    const signedIn = getToken()

    return (
        <nav>


            {/* Checks to see if we have a token or not. If we don't, we sign in */}
            {!signedIn && <Link to='/login'>Login</Link>}

            {/* If we do, we get our account. */}
            {signedIn && <Link to='/bubbles-page'>Bubbles</Link>}
            {signedIn && <Link to='/logout'>Logout</Link>}
        </nav>
    )
}

export default Navigation;