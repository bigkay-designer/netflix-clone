import axios from 'axios'

// All url will start with the one below
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default instance