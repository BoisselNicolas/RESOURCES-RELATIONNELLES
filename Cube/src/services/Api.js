import axios from 'axios'


export default () => {
    return axios.create({
        baseURL: 'http://localhost:8080/',
        headers: {
            'Authorization': 'Bearer '+sessionStorage.getItem('accessToken')
        }
    })
}