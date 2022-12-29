import {AxiosError} from 'axios'

export const erroIntercepetor = (error: AxiosError) => {
     if(error.message === 'Network Error') {
          return Promise.reject(new Error(`Erro de Conexao: ${error.code}`))
     }

     // Working on error codes together with the backend team

     return Promise.reject(error)
}