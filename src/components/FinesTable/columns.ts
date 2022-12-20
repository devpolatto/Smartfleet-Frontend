import { HeadColumn } from './interfaces'

export const headColumns: readonly HeadColumn[] = [
     {
          id: 'placa',
          numeric: true,
          disablePadding: false,
          label: 'Placa',
     },
     {
          id: 'dataInfracao',
          numeric: true,
          disablePadding: false,
          label: 'Data e Hora',
     },
     {
          id: 'status',
          numeric: true,
          disablePadding: false,
          label: 'Status',
     },
     {
          id: 'situacao',
          numeric: true,
          disablePadding: false,
          label: 'Situação',
     },
     {
          id: 'codigo',
          numeric: true,
          disablePadding: false,
          label: 'Código',
     },
     {
          id: 'cidade',
          numeric: true,
          disablePadding: false,
          label: 'Cidade',
     },
     {
          id: 'valorBoleto',
          numeric: true,
          disablePadding: false,
          label: 'Valor do Boleto',
     },
     {
          id: 'dataVencimentoBoleto',
          numeric: true,
          disablePadding: false,
          label: 'Data de Vencimento',
     },
   ];