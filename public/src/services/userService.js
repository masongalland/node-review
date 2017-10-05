import axios from 'axios';

export function getUsers(category, term){
    return axios.get(`/api/users?${category}=${term}`)
    .then(response => response.data)
}
export function getUserById(id){
    return axios.get(`/api/users/${id}`)
    .then(response => response.data)
}
export function deleteUserById(id){
    return axios.get(`/api/users/${id}`)
    .then(response => response.data)
}