export type Order = 'asc' | 'desc';

export interface Data {
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

export interface HeadColumn {
     disablePadding: boolean;
     id: keyof Data;
     label: string;
     numeric: boolean;
}

export interface EnhancedTableProps {
     numSelected: number;
     onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
     onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
     order: Order;
     orderBy: string;
     rowCount: number;
}