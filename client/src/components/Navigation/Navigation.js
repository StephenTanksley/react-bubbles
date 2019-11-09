import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { getToken } from '../../utils/api'
import { Container } from '../styled'

const Navigation = () => {

    const signedIn = getToken()

    return (
        <Container>
        <nav>

            {/* Checks to see if we have a token or not. If we don't, we sign in */}
            {!signedIn && <Link to='/login'>Login</Link>}

            {/* If we do, we get our account. */}
            {/* {signedIn && <Link to='/bubble-page'>Bubbles</Link>} */}
            {signedIn && <Link to='/logout'>Logout</Link>}
        </nav>
        </Container>
    )
}

export default Navigation;