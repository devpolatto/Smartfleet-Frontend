import * as React from 'react';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';

import { Data, EnhancedTableProps, Order } from './interfaces'

import { getComparator, stableSort, createDataMoked } from './Utils'

import { headColumns } from './columns'

const rows = [
     createDataMoked('1234', 'aberto', '17/10/2022 16:41:00', 'Notificado', 'Recife', '484848', 'R$104,13', '07/12/2022', 'BE05C75'),
     createDataMoked('1235', 'aberto', '17/10/2022 16:41:00', 'Notificado', 'Recife', '484849', 'R$104,13', '07/12/2022', 'BE05C45'),
     createDataMoked('1236', 'aberto', '17/10/2022 16:41:00', 'Notificado', 'Recife', '484850', 'R$104,13', '07/12/2022', 'BE05C73'),
     createDataMoked('1237', 'aberto', '17/10/2022 16:41:00', 'Notificado', 'Recife', '484851', 'R$104,13', '07/12/2022', 'BE05C34'),
     createDataMoked('1434', 'aberto', '17/10/2022 16:41:00', 'Notificado', 'Recife', '484852', 'R$104,13', '07/12/2022', 'BE05C78'),
     createDataMoked('1235', 'aberto', '17/10/2022 16:41:00', 'Notificado', 'Recife', '484853', 'R$104,13', '07/12/2022', 'BE05C11'),
]

function EnhancedTableHead(props: EnhancedTableProps) {
     const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
     const createSortHandler = (property: keyof Data) => (
               event: React.MouseEvent<unknown>
          ) => {
               onRequestSort(event, property);
          };

     return (
          <TableHead>
               <TableRow>
                    <TableCell padding="checkbox">
                         <Checkbox
                         color="primary"
                         indeterminate={numSelected > 0 && numSelected < rowCount}
                         checked={rowCount > 0 && numSelected === rowCount}
                         onChange={onSelectAllClick}
                         inputProps={{
                         'aria-label': 'select all desserts',
                         }}
                         />
                    </TableCell>
                    {headColumns.map((headColumn) => (
                         <TableCell
                         key={headColumn.id}
                         align={headColumn.id === 'placa' ? 'left' : 'right'}
                        //  align={headColumn.numeric ? 'right' : 'left'}
                         padding={headColumn.disablePadding ? 'none' : 'normal'}
                         sortDirection={orderBy === headColumn.id ? order : false}
                         >
                         <TableSortLabel
                         active={orderBy === headColumn.id}
                         direction={orderBy === headColumn.id ? order : 'asc'}
                         onClick={createSortHandler(headColumn.id)}
                         >
                              {headColumn.label}
                              {orderBy === headColumn.id ? (
                                   <Box component="span" sx={visuallyHidden}>
                                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                   </Box>
                              ) : null}
                         </TableSortLabel>
                         </TableCell>
                    ))}
               </TableRow>
    </TableHead>
          
     );
}

export default function EnhancedTable() {
     const [order, setOrder] = React.useState<Order>('asc');
     const [orderBy, setOrderBy] = React.useState<keyof Data>('placa');
     const [selected, setSelected] = React.useState<readonly string[]>([]);
     const [page, setPage] = React.useState(0);
     const [dense, setDense] = React.useState(false);
     const [rowsPerPage, setRowsPerPage] = React.useState(5);
   
     const handleRequestSort = (
       event: React.MouseEvent<unknown>,
       property: keyof Data,
     ) => {
       const isAsc = orderBy === property && order === 'asc';
       setOrder(isAsc ? 'desc' : 'asc');
       setOrderBy(property);
     };
   
     const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
       if (event.target.checked) {
         const newSelected = rows.map((n) => n.placa);
         setSelected(newSelected);
         return;
       }
       setSelected([]);
     };
     
     const handleDoublleClick = (event: React.MouseEvent<unknown>, name: string) => {
       const selectedIndex = selected.indexOf(name);
       if(!selected) {
         setSelected([''])
       }
   
       alert(`clicou em ${name}`)
     }
     const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
       const selectedIndex = selected.indexOf(name);
       let newSelected: readonly string[] = [];
   
       if (selectedIndex === -1) {
         newSelected = newSelected.concat(selected, name);
       } else if (selectedIndex === 0) {
         newSelected = newSelected.concat(selected.slice(1));
       } else if (selectedIndex === selected.length - 1) {
         newSelected = newSelected.concat(selected.slice(0, -1));
       } else if (selectedIndex > 0) {
         newSelected = newSelected.concat(
           selected.slice(0, selectedIndex),
           selected.slice(selectedIndex + 1),
         );
       }
   
       setSelected(newSelected);
     };
   
     const handleChangePage = (event: unknown, newPage: number) => {
       setPage(newPage);
     };
   
     const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
       setRowsPerPage(parseInt(event.target.value, 10));
       setPage(0);
     };
   
     const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
       setDense(event.target.checked);
     };
   
     const isSelected = (name: string) => selected.indexOf(name) !== -1;
   
     // Avoid a layout jump when reaching the last page with empty rows.
     const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
   
     return (
       <Box sx={{ width: '100%' }}>
         <Paper sx={{ width: '100%', mb: 2 }}>
           {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
           <TableContainer>
             <Table
               sx={{ minWidth: 750 }}
               aria-labelledby="tableTitle"
               size={'small'}
             >
               <EnhancedTableHead
                 numSelected={selected.length}
                 order={order}
                 orderBy={orderBy}
                 onSelectAllClick={handleSelectAllClick}
                 onRequestSort={handleRequestSort}
                 rowCount={rows.length}
               />
               <TableBody>
                 {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
                 {stableSort(rows, getComparator(order, orderBy))
                   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                   .map((row, index) => {
                     const isItemSelected = isSelected(row.placa);
                     const labelId = `enhanced-table-checkbox-${index}`;
   
                     return (
                       <TableRow
                         sx={{cursor: 'pointer'}}
                         onDoubleClick={(event) => handleDoublleClick(event, row.id)}
                         hover
                         onClick={(event) => handleClick(event, row.id)} //handleClick(event, row.name)
                         role="checkbox"
                         aria-checked={isItemSelected}
                         tabIndex={-1}
                         key={row.id}
                         selected={isItemSelected}
                       >
                         <TableCell padding="checkbox">
                           <Checkbox
                             color="primary"
                             checked={isItemSelected}
                             inputProps={{
                               'aria-labelledby': labelId,
                             }}
                           />
                         </TableCell>
                         <TableCell
                           component="th"
                           id={labelId}
                           scope="row"
                           padding="none"
                         >
                           {row.placa}
                         </TableCell>
                         <TableCell align="right">{row.dataInfracao}</TableCell>
                         <TableCell align="right">{row.status}</TableCell>
                         <TableCell align="right">{row.situacao}</TableCell>
                         <TableCell align="right">{row.codigo}</TableCell>
                         <TableCell align="right">{row.cidade}</TableCell>
                         <TableCell align="right">{row.valorBoleto}</TableCell>
                         <TableCell align="right">{row.dataVencimentoBoleto}</TableCell>
                       </TableRow>
                     );
                   })}
                 {emptyRows > 0 && (
                   <TableRow
                     style={{
                       height: (dense ? 33 : 53) * emptyRows,
                     }}
                   >
                     <TableCell colSpan={6} />
                   </TableRow>
                 )}
               </TableBody>
             </Table>
           </TableContainer>
           <TablePagination
             rowsPerPageOptions={[5, 10, 25]}
             component="div"
             count={rows.length}
             rowsPerPage={rowsPerPage}
             page={page}
             onPageChange={handleChangePage}
             onRowsPerPageChange={handleChangeRowsPerPage}
           />
         </Paper>
         {/* <FormControlLabel
           control={<Switch checked={dense} onChange={handleChangeDense} />}
           label="Dense padding"
         /> */}
       </Box>
     );
   }

