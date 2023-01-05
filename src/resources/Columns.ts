import { GridColDef} from '@mui/x-data-grid';

export const finesColumns: GridColDef[] = [
     { field: 'id', headerName: 'ID', width: 80, hide: true, align: 'right' },
     { field: 'codigo', headerName: 'Código', width: 130, align: 'left', headerAlign: 'left' },
     { field: 'placa', headerName: 'Placa', width: 130 },
     { field: 'status', headerName: 'Satus', width: 130, align: 'left', headerAlign: 'left' },
     { field: 'dataInfracao', headerName: 'Dada da infração', width: 170},
     { field: 'situacao', headerName: 'Situação', width: 130, align: 'left', headerAlign: 'left' },
     { field: 'cidade', headerName: 'Cidade', width: 130, align: 'left', headerAlign: 'left' },
     { field: 'valorBoleto', headerName: 'Valor do Boleto', width: 130, align: 'left', headerAlign: 'left'},
     { field: 'vencimentoBoleto', headerName: 'Data de Vencimento', width: 180, align: 'left', headerAlign: 'right' },
];