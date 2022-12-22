import axios from 'axios';

import { responseIntercepetor,  erroIntercepetor} from './interceptors';

const URL = 'http://localhost:3333';
// const URL = process.env.REACT_APP_BASE_URL

const instanceAxios = axios.create({
     baseURL: URL
})

instanceAxios.interceptors.response.use(
     (response) => responseIntercepetor(response),
     (error) => erroIntercepetor(error),
)

export {instanceAxios}