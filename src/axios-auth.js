import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-project2-e2e7e.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance;