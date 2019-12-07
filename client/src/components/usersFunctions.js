const axios = require("axios");

export const login = user =>{
    return axios
    .post('users/login', {
        email    : user.email,
        password : user.password
    })
    .then(res => {
        //para criar um novo par de chave
        localStorage.setItem('usertoken', res.data)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}