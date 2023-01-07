import {instanceAxios} from '../axiosConfig'

import { IFine, ITotalFinesCount } from '../../@types'

import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/pt-br';

const getAllFinesByTime = async (
     page = 1, 
     time: number
     ): Promise<ITotalFinesCount | Error>     => {

     const date = dayjs().format('YYYY-MM-DD') // date today

     const dateSubtract = dayjs().subtract(time, 'M').format('YYYY-MM-DD') // subtract current date  

     const url = `/multas/listar-periodo/${dateSubtract}/${date}`

     console.log(url)
     
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
const getFinesByTimeCustom = async (
          initialDate: string,
          finalDate: string
     ):Promise<ITotalFinesCount | Error> => {

     const url = `/multas/listar-periodo/${initialDate}/${finalDate}`

     try {
          const { data, headers } = await instanceAxios.get(url)
          
          if (data) {
               console.log(data)
               console.log(url)
               return {
                    data,
                    totalCount: Number(headers['x-total-count'] || 10)
               }
          }
          return new Error('Erro ao buscar os dados')

     } catch (error) {
          console.log(error)
          return new Error('Erro ao buscar a multa')
     }
}

export const FinesServices = {
     getAllFinesByTime,
     getFinesByTimeCustom
}
