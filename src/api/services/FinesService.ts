import {instanceAxios} from '../axiosConfig'

import { IFine, ITotalFinesCount } from '../../@types'

const getAllFinesByTime = async (
     page = 1, 
     plateFilter = '', 
     initial_date = '',
     final_date = ''
     ): Promise<ITotalFinesCount | Error> => {

     const url = `/multas?page=${page}&_limit=15&placa_like=${plateFilter}&_dataInfracao=${initial_date}&_dataFinal=${final_date}`
     // const url = `/multas/listar-periodo/2022-02-02/2022-04-01`/
     // const url = `/multas/listar-periodo/${initial_date}/${final_date}?page=${page}&_limit=15&placa_like=${plateFilter}`

     try {
          const { data, headers } = await instanceAxios.get(url)

          if (data) {
               console.log(data)
               return {
                    data,
                    totalCount: Number(headers['x-total-count'] || 10)
               }
          }

          return new Error('Erro ao buscar os dados')

     } catch (error) {
          console.log(error)
          return new Error(`${error}`)
     }
}
const getFinesById = async (id: string):Promise<IFine | Error> => {
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
