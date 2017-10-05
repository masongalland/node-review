import axios from 'axios';

export function getUsers(category, term){
    return axios.get(`/api/users?${category}=${term}`)
    .then(response => response.data)
}