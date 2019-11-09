import axios from 'axios'

export const getToken = () => {
    return localStorage.getItem('token')
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