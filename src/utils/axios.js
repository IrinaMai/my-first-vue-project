import axios from 'axios'

const axiosInstance  = axios.create({
    baseURL : `https://apt-booking-api.herokuapp.com/`,
    headers: { 
        'Content-Type' : 'text/plain' 
    }

})
export default axiosInstance;