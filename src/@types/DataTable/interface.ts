export type Order = 'asc' | 'desc';
import { IFine } from '../'

export interface IHeadColumn {
     disablePadding: boolean;
     id: keyof IFine;
     label: string;
     numeric: boolean;
}

export interface IEnhancedTableProps {
     numSelected: number;
     onRequestSort: (event: React.MouseEvent<unknown>, property: keyof IFine) => void;
     onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
     order: Order;
     orderBy: string;
     rowCount: number;
}