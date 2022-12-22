export type Order = 'asc' | 'desc';
import { Fine } from '../../api/services/FinesService'

export interface HeadColumn {
     disablePadding: boolean;
     id: keyof Fine;
     label: string;
     numeric: boolean;
}

export interface EnhancedTableProps {
     numSelected: number;
     onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Fine) => void;
     onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
     order: Order;
     orderBy: string;
     rowCount: number;
}