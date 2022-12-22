import React from 'react'
import { Button, TextField } from '@mui/material';

import DataTable from '../../components/SharedTable'

const Fines: React.FC = () => {
  return (
    <div className='grid-content-page'>
      <div className='w-full h-[200px] flex flex-row justify-between'>
        <div>
          <Button variant='contained'>Dashboard</Button>
        </div>
        <div>Grafico</div>
      </div>
      <div className='flex flw-row gap-6 mb-3'>
        <TextField
          label="Pesquisar por placa"
          type="search"
          autoComplete="current-password"
        />
        <div className='flex flex-row gap-3'>
          <Button variant='contained'>Últimos 3 meses</Button>
          <Button variant='outlined'>Últimos 6 meses</Button>
        </div>
      </div>
      <DataTable rows={[]} isLoading={true} totalCount={0}/>
    </div>
  )
}

export default Fines