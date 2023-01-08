import { useState } from 'react'
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

import {AnimatePresence, motion} from 'framer-motion'

import { IFine } from '../../@types'

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

interface ISideBarProps {
     isOpen: boolean;
     setIsOpen: Function;
     data?: IFine;
}

function Sidebar({isOpen = false, setIsOpen, data}: ISideBarProps) {
     return (
       <AnimatePresence>
         {isOpen && (
           <>
             <motion.div
               initial={{ x: "100%" }}
               animate={{
                 x: 0
               }}
               exit={{
                 x: "100%"
               }}
               transition={{ type: "spring", bounce: 0, duration: 0.4 }}
               className="fixed bg-slate-50 text-black top-0 right-0 w-full max-w-[40rem] h-screen p-5 z-10 shadow-2xl shadow-black"
             >
               <button
                 onClick={() => setIsOpen(() => !isOpen)}
                 className="bg-white text-black h-8 w-8 block mb-2 rounded-full"
               >
                 &times;
               </button>

               {
                    data ? (
                         <div>
                              <p>{data.id}</p>
                              <p>{data.status}</p>
                              <p>{data.dataInfracao}</p>
                              <p>{data.situacao}</p>
                              <p>{data.cidade}</p>
                              <p>{data.codigo}</p>
                              <p>{data.valorBoleto}</p>
                              <p>{data.dataVencimentoBoleto}</p>
                              <p>{data.placa}</p>
                              <p>{data.descricao}</p> 
                              <p>{data.horaInfracao}</p> 
                              <p>{data.apCondutorDataVencimento}</p> 
                              <p>{data.endereco}</p> 
                              <p>{data.artigo}</p> 
                              <p>{data.nroProcessamentoMG}</p> 
                              <p>{data.valor}</p> 
                              <p>{data.codigoBarras}</p> 
                              <p>{data.orgao}</p> 
                              <p>{data.renavam}</p> 
                              <p>{data.ait}</p> 
                              <p>{data.id_situacao}</p> 
                              <p>{data.pontuacao}</p> 
                              <p>{data.velocidadeMedida}</p> 
                              <p>{data.velocidadeRegulamentada}</p> 
                              <p>{data.autoInfracao2}</p> 
                              <p>{data.uf}</p> 
                              <p>{data.datahoraInfracaoUTC}</p> 
                              <p>{data.nicAutoInfracaoOriginario}</p> 
                              <p>{data.aiipmulta}</p>
                         </div> 
                    ) : (
                         <p>nenhum resultado</p>
                    )
               }
               
             </motion.div>
             {/* <motion.div
               initial={{ opacity: 0 }}
               animate={{
                 opacity: 1
               }}
               exit={{
                 opacity: 0
               }}
               transition={{ type: "spring", bounce: 0, duration: 0.2 }}
               onClick={() => setIsOpen((isOpen) => !isOpen)}
               className="bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
             /> */}
           </>
         )}
       </AnimatePresence>
     );
}

export default function DataTable({rows, totalCount, isLoading}: DataTableProps) {

     const [isOpenModal, setIsOpenModal] = useState(false)
     const [showData, setShowData] = useState<IFine>()

     const handleModal = () => {
          setIsOpenModal(!isOpenModal)
     }

     const saveData = (row: IFine) => {
          setShowData(row)
          handleModal()
     }

     return (
          <>
          <Sidebar isOpen={isOpenModal} setIsOpen={saveData} data={showData}/>
          <Paper>
               <div style={{ height: 600, width: '100%' }}>
                    <DataGrid
                    getRowId={rows.id}
                    key={rows.placa}
                    rows={rows}
                    columns={finesColumns}
                    pageSize={20}
                    rowsPerPageOptions={[20]}
                    checkboxSelection
                    rowCount={totalCount}
                    loading={isLoading}
                    disableSelectionOnClick
                    onRowDoubleClick={(row) => saveData(row.row)}
                    sx={{cursor: "pointer", height: 600}}
                    components={{
                         Pagination: CustomPagination
                    }}
                    />
               </div>
          </Paper>
       </>
     );
   }
