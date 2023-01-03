import {AxiosError} from 'axios'

export const erroIntercepetor = (error: AxiosError) => {


     if(error.message === 'Network Error') {
          console.log(error)
          return Promise.reject(new Error(`Erro de Conexao: ${error.code}`))
     }

     if(error.response?.status === 404) {
          console.log(error)
          return Promise.reject(new Error(`Não foi possível se comunicar com o servidor. | HTTP Code ${error.response.status}`))
     }

     // Working on error codes together with the backend team

     return Promise.reject(error.response?.status)
}