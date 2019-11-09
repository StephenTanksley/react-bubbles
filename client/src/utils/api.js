import axios from 'axios'

//set token initially
export const setToken = token => localStorage.setItem('token', token)

//get a token when we already have it.
export const getToken = () => localStorage.getItem('token')

//delete it once we no longer want it.
export const removeToken = () => localStorage.removeItem('token')

export const axiosWithoutAuth = () => {

    return (
        axios.create({
            baseURL: 'http://localhost:5000/api'
        })
    )
}

export const axiosWithAuth = () => {
    return(
        axios.create({
            baseURL: 'http://localhost:5000/api',
            headers: {
                "Authorization" : getToken()
            }
        })
    )
}