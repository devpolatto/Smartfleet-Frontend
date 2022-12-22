import {instanceAxios} from '../axiosConfig'

interface Fine {
     id: string;
     status: string;
     dataInfracao: string;
     situacao: string;
     cidade: string
     codigo: string;
     valorBoleto: string;
     dataVencimentoBoleto: string;
     placa: string;
}

export interface FineDetails extends Fine {
     descricao: string; 
     horaInfracao: string; 
     apCondutorDataVencimento: string; 
     endereco: string; 
     artigo: string; 
     nroProcessamentoMG: string; 
     valor: string; 
     codigoBarras: string; 
     orgao: string; 
     renavam: string; 
     ait: string; 
     id_situacao: string; 
     pontuacao: string; 
     velocidadeMedida: string; 
     velocidadeRegulamentada: string; 
     autoInfracao2: string; 
     uf: string; 
     datahoraInfracaoUTC: string; 
     nicAutoInfracaoOriginario: string; 
     aiipmulta: string; 
}

export type TotalFinesCount = {
     data: FineDetails[];
     totalCount: number;
}

const getAllFines = async (page = 1, plateFilter = ''): Promise<TotalFinesCount | Error> => {
     const url = `/multas?page=${page}&_limit=15&placa_like=${plateFilter}`
     // const url = `/multas`

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
          console.log(error)
          return new Error('Erro ao buscar os dados')
     }
}

const getFinesById = async (id: string):Promise<FineDetails | Error> => {
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
     getAllFines,
     getFinesById
}
