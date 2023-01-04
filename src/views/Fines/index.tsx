import React, {useEffect, useState, useMemo, useContext} from 'react'
import { useSearchParams } from 'react-router-dom'

import { FineContext } from '../../context'

import { Button, Stack, TextField } from '@mui/material';

import { FinesServices } from '../../api/services/FinesService'

import { useDebounce } from '../../Hooks/useDebounce';

import {CustomAlert} from '../../components/Alert'

import DataTable from '../../components/SharedTable'

import { Dayjs } from 'dayjs';
import 'dayjs/locale/pt-br';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Fines: React.FC = () => {
  const {
    rows, 
    setRows,
    totalCount,
    setTotalCount
  } = useContext(FineContext)

  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce(1000, false);

  const [isLoading, setIsLoading] = useState(true)

  const [openAlert, setOpenAlert] = useState(false)
  const [messageAlert, setMessageAlert] = useState({
    title: 'Error',
    message: ''
  })

  const [initialDatePickerValue, setInitialDatePickerValue] = useState<Dayjs | null>(null);
  const [finalDatePickerValue, setFinalDatePickerValue] = useState<Dayjs | null>(null);
  const locale = 'pt-br'

  function convertDate(date: Dayjs | string) {
    const dateToString = date.toString()
    const newDate = dateToString.split('/').reverse().join('-');;
    console.log(newDate)
    return newDate;
  }

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

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
          setMessageAlert({...messageAlert, message: response.message})
          setOpenAlert(true)
          console.log(response)
          return;
        } else {
          setRows?.(response.data)
          setTotalCount?.(response.totalCount)
        }
      })
    })

  }, [search])

  return (

    <div className='grid-content-page'>
      <CustomAlert 
      statusOpen={openAlert}
      vertical={'top'}
      horizontal={'center'}
      vairiant={'filled'}
      message={messageAlert.message}
      severity={'error'}
      handleClose={handleCloseAlert}
      />
      <div className='w-full h-[200px] flex flex-row justify-between'>
        <div>
          <Button variant='contained'>Dashboard</Button>
        </div>
        <div>Grafico</div>
      </div>
      <div id='toolBar' className='flex flw-row gap-4 mb-3'>
        <TextField
          label="Pesquisar por placa"
          type="search"
          value={search}
          onChange={text => setSearchParams({search: text.target.value}, {replace: false})}
        />
        <div className='flex w-full flex-row justify-between'>
          <Stack direction={'row'} className='gap-4'>
            <Button variant='contained' disableElevation>Últimos 3 meses</Button>
            <Button variant='outlined' disableElevation>Últimos 6 meses</Button>
          </Stack>

          <Stack direction={'row'} className='gap-2'>
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
          <Button 
            variant='contained'
            // onClick={() => searchByIntervalTime(initialDatePickerValue?.format('YYYY-MM-DD').toString(),finalDatePickerValue.format('YYYY-MM-DD').toString())}
            >
            Buscar
          </Button>
          </Stack>
        </div>
      </div>
      <DataTable rows={rows} isLoading={isLoading} totalCount={totalCount}/>
    </div>
  )
}

export default Fines