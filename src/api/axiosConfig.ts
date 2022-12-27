import axios from 'axios';
import { API } from '../resources/env';

import { responseIntercepetor,  erroIntercepetor} from './interceptors';

const URL = import.meta.env.DEV ? API : ''

const instanceAxios = axios.create({
     baseURL: URL
})

instanceAxios.interceptors.response.use(
     (response) => responseIntercepetor(response),
     (error) => erroIntercepetor(error),
)

export {instanceAxios}
