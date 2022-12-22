import React, {useEffect, useState, useMemo} from 'react'
import { useSearchParams } from 'react-router-dom'

import { Button, TextField } from '@mui/material';

import DataTable from '../../components/SharedTable'

import { FinesServices, FineDetails } from '../../api/services/FinesService'

import { useDebounce } from '../../Hooks/useDebounce';

const Fines: React.FC = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce(1000, false);
  const [rows, setRows] = useState<FineDetails[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const search = useMemo(( ) => {
    return searchParams.get('search' ) || '';
  }, [searchParams]);

  useEffect(( ) => {
    setIsLoading(true)

    debounce(() => {
      FinesServices.getAllFines(1, search)
      .then(response => {
        setIsLoading(false)
        if(response instanceof Error) {
          alert(response.message)
          return;
        } else {
          console.log(response)
          setRows(response.data)
          setTotalCount(response.totalCount)
        }
      })
    })

  }, [search])

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
          value={search}
          onChange={text => setSearchParams({search: text.target.value}, {replace: false})}
        />
        <div className='flex flex-row gap-3'>
          <Button variant='contained'>Últimos 3 meses</Button>
          <Button variant='outlined'>Últimos 6 meses</Button>
        </div>
      </div>
      <DataTable rows={rows} isLoading={isLoading} totalCount={totalCount}/>
    </div>
  )
}

export default Fines