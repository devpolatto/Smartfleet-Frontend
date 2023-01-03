import {instanceAxios} from '../axiosConfig'

import { FineInterface, TotalFinesCountInterface } from '../../@types'

const getAllFinesByTime = async (
     page = 1, 
     plateFilter = '', 
     initial_date = '',
     final_date = ''
     ): Promise<TotalFinesCountInterface | Error> => {

     const url = `/multa?page=${page}&_limit=15&placa_like=${plateFilter}&_dataInfracao=${initial_date}&_dataFinal=${final_date}`

     try {
          const { data, headers } = await instanceAxios.get(url)

          if (data) {
               return {
                    data,
                    totalCount: Number(headers['x-total-count'] || 10)
               }
          }

          return new Error('Erro ao buscar os dados')

     } catch (error) {
          return new Error(`${error}`)
     }
}
const getFinesById = async (id: string):Promise<FineInterface | Error> => {
     const url = `/multas/:id`

     try {
          const { data, headers } = await instanceAxios.get(url)
          
          if (id) {
               return data
          }

          return new Error('Erro ao buscar a multa')

     } catch (error) {
          console.log(error)
          return new Error('Erro ao buscar a multa')
     }
}

export const FinesServices = {
     getAllFinesByTime,
     getFinesById
}
