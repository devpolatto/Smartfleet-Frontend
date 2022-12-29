import React, {useEffect, useState, useMemo} from 'react'
import { useSearchParams } from 'react-router-dom'

import { Button, TextField } from '@mui/material';

import { FineInterface } from '../../@types'
import { FinesServices } from '../../api/services/FinesService'

import { useDebounce } from '../../Hooks/useDebounce';

import ToastSnackbar from '../../api/interceptors/Toast';

import DataTable from '../../components/SharedTable'

import { Dayjs } from 'dayjs';
import 'dayjs/locale/pt-br';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Fines: React.FC = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce(1000, false);
  const [rows, setRows] = useState<FineInterface[]>([])
  const [totalCount, setTotalCount] = useState(0)

  const [isLoading, setIsLoading] = useState(true)

  const [openToast, setOpenToast] = useState(false)
  const [messageOnToast, setMessageOnToast] = useState('')

  const [initialDatePickerValue, setInitialDatePickerValue] = useState<Dayjs | null>(null);
  const [finalDatePickerValue, setFinalDatePickerValue] = useState<Dayjs | null>(null);
  const locale = 'pt-br'


  const search = useMemo(( ) => {
    return searchParams.get('search' ) || '';
  }, [searchParams]);

  useEffect(( ) => {
    setIsLoading(true)

    debounce(() => {
      FinesServices.getAllFinesByTime(1, search)
      .then(response => {
        setIsLoading(false)
        if(response instanceof Error) {
          setOpenToast(true)
          setMessageOnToast(`${response.message} - HTTP code ${response.name} `)
          return;
        } else {
          setRows(response.data)
          setTotalCount(response.totalCount)
        }
      })
    })

  }, [search])

  return (

    <div className='grid-content-page'>
      {
        openToast ? (
          <ToastSnackbar setOpen={openToast} message={messageOnToast}/>
        ) : ''
      }
      <div className='w-full h-[200px] flex flex-row justify-between'>
        <div>
          <Button variant='contained'>Dashboard</Button>
        </div>
        <div>Grafico</div>
      </div>
      <div className='flex flw-row gap-10 mb-3'>
        <TextField
          label="Pesquisar por placa"
          type="search"
          value={search}
          onChange={text => setSearchParams({search: text.target.value}, {replace: false})}
        />
        <div className='flex flex-row gap-3'>
          <Button variant='contained'>Últimos 3 meses</Button>
          <Button variant='outlined'>Últimos 6 meses</Button>

          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
            <DatePicker
              label="Data de Início"
              value={initialDatePickerValue}
              onChange={(newDate) => {
                setInitialDatePickerValue(newDate);
              }}
              renderInput={(params) => (
                <TextField {...params} />
              )}
            />
            <DatePicker
              label="Data Final"
              value={finalDatePickerValue}
              onChange={(newDate) => {
                setFinalDatePickerValue(newDate);
              }}
              renderInput={(params) => (
                <TextField {...params} />
              )}
            />
          </LocalizationProvider>
          <Button variant='outlined'>Buscar</Button>
        </div>
      </div>
      <DataTable rows={rows} isLoading={isLoading} totalCount={totalCount}/>
    </div>
  )
}

export default Fines