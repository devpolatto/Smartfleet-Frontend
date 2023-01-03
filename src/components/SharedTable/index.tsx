import { Paper } from '@mui/material'
import {
  DataGrid, 
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector 
} from '@mui/x-data-grid';

import Pagination from "@mui/material/Pagination"

import { finesColumns } from '../../resources/Columns'

export function CustomPagination() {
     const apiRef = useGridApiContext();
     const page = useGridSelector(apiRef, gridPageSelector);
     const pageCount = useGridSelector(apiRef, gridPageCountSelector);
   
     return (
          <Pagination
          color="primary"
          count={pageCount}
          page={page + 1}
          onChange={(event, value) => apiRef.current.setPage(value - 1)}
          />
     );
}

interface DataTableProps  {
     rows: any;
     totalCount: number;
     isLoading: boolean;
     typeSharedTable?: 'fine' | 'car' | 'gasoline' // build dynamic column
}

export default function DataTable({rows, totalCount, isLoading}: DataTableProps) {
     return (
       <Paper>
             <div style={{ height: 600, width: '100%' }}>
                  <DataGrid
                  getRowId={rows.id}
                  key={rows.placa}
                  rows={rows}
                  columns={finesColumns}
                  pageSize={10}
                  rowsPerPageOptions={[10]}
                  checkboxSelection
                  rowCount={totalCount}
                  loading={isLoading}
                  disableSelectionOnClick
                  onRowDoubleClick={(row) => alert(`clicou em ${row.id}`)}
                  sx={{cursor: "pointer", height: 600}}
                  components={{
                     Pagination: CustomPagination
                  }}
                  />
             </div>
       </Paper>
     );
   }
