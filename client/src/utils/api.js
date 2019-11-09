import axios from 'axios'

//set token initially
export const setToken = token => {
    localStorage.setItem('token', token)
}

export const getToken = () => {
    return localStorage.getItem('token')
}

//delete it once we no longer want it.
export const removeToken = () => {
    return localStorage.removeItem('token')
}


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
                "Authorization" : getToken(),
                "Content-Type" : 'application/json'
            }
        })
    )
}