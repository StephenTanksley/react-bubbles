import React, { useState } from "react";
import { axiosWithAuth as axios, setToken } from '../../utils/api';

const Login = (props) => {

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  //I need to make my call on login that sends along my credentials to the server, gets the token, and then uses that to validate further requests.

  const authorized = {
      username: '',
      password:''
    }

  const [authUser, setAuthUser] = useState(authorized)
  const [error, setError] = useState()

  const handleChange = (e) => {
    setAuthUser({...authUser, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios()
      .post('/login', authUser)
      .then(response => {
        setToken(response.data.payload)
        props.history.push('/bubble-page')
        // setUser(initialState)
        // ^^ I may end up taking this out. It may be redundant. ^^
      })
      .catch(error => {
        setError(error)
        console.log(error)
      })
  }

  return (
    <>
      <div className = 'login-form'>
        <h1>Welcome to the Bubble App!</h1>

        {/* We want to see the error on the page if there is an error. */}
        {error && <div className="error">{`${error}`}</div>}

        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            name='username'
            className="input-field"
            value={authUser.username}
            placeholder="Username"
            onChange={handleChange}  
            />

          <input 
            type='text'
            name='password'
            className="input-field"
            value={authUser.password}
            placeholder="password"
            onChange={handleChange}  
            />
        <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;